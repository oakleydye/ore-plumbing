'use client';

import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import testData from '@/data/analytics-test-data.json';

// ─── Types ────────────────────────────────────────────────────────────────────

interface DayStat {
  date: string;
  phone_click: number;
  email_click: number;
  sms_click: number;
  contact_form_submitted: number;
}

interface SourceStat {
  source: string;
  phone_click: number;
  email_click: number;
  sms_click: number;
  contact_form_submitted: number;
}

interface RecentEvent {
  id: string;
  eventType: string;
  source: string | null;
  createdAt: string;
  metadata: Record<string, unknown> | null;
}

interface AnalyticsSummary {
  totalPhoneCalls: number;
  totalEmailClicks: number;
  totalSmsClicks: number;
  totalFormSubmissions: number;
  totalEvents: number;
}

interface AnalyticsData {
  summary: AnalyticsSummary;
  eventsByDay: DayStat[];
  eventsBySource: SourceStat[];
  recentEvents: RecentEvent[];
}

// ─── Constants ────────────────────────────────────────────────────────────────

const COLORS = {
  phone_click: '#2563eb',
  email_click: '#16a34a',
  sms_click: '#d97706',
  contact_form_submitted: '#7c3aed',
};

const PIE_COLORS = ['#2563eb', '#16a34a', '#d97706', '#7c3aed'];

const SOURCE_LABELS: Record<string, string> = {
  contact_page_hero: 'Contact Hero',
  contact_page_cta: 'Contact CTA',
  contact_page_methods: 'Contact Methods',
  contact_form: 'Contact Form',
  footer_call_now: 'Footer Call Now',
  footer_contact: 'Footer Contact',
  contact_form_sidebar: 'Form Sidebar',
  contact_form_cta: 'Form CTA',
  hero: 'Homepage Hero',
  unknown: 'Unknown',
};

const EVENT_LABELS: Record<string, string> = {
  phone_click: 'Phone Call',
  email_click: 'Email Click',
  sms_click: 'SMS Click',
  contact_form_submitted: 'Form Submission',
};

// ─── Helper components ────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: number;
  icon: string;
  color: string;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">{label}</p>
            <p className={`text-3xl font-bold mt-1 ${color}`}>{value}</p>
          </div>
          <span className="text-4xl">{icon}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/Denver',
  });
}

function eventBadgeClass(eventType: string) {
  const map: Record<string, string> = {
    phone_click: 'bg-blue-100 text-blue-800',
    email_click: 'bg-green-100 text-green-800',
    sms_click: 'bg-amber-100 text-amber-800',
    contact_form_submitted: 'bg-purple-100 text-purple-800',
  };
  return map[eventType] ?? 'bg-gray-100 text-gray-800';
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const RANGE_OPTIONS = [
  { label: '7 days', value: 7 },
  { label: '30 days', value: 30 },
  { label: '90 days', value: 90 },
];

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [usingTestData, setUsingTestData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/analytics?days=${days}`);
        if (res.ok) {
          const json = await res.json();
          // If no events yet, fall back to test data so you can preview the UI
          if (json.summary.totalEvents === 0) {
            setData(testData as AnalyticsData);
            setUsingTestData(true);
          } else {
            setData(json);
            setUsingTestData(false);
          }
        } else {
          setData(testData as AnalyticsData);
          setUsingTestData(true);
        }
      } catch {
        setData(testData as AnalyticsData);
        setUsingTestData(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [days]);

  // Build pie data from summary
  const pieData = data
    ? [
        { name: 'Phone Calls', value: data.summary.totalPhoneCalls },
        { name: 'Email Clicks', value: data.summary.totalEmailClicks },
        { name: 'SMS Clicks', value: data.summary.totalSmsClicks },
        { name: 'Form Submissions', value: data.summary.totalFormSubmissions },
      ].filter(d => d.value > 0)
    : [];

  // Shorten date labels for the line chart
  const chartDays = data?.eventsByDay.map(d => ({
    ...d,
    label: formatDate(d.date),
  })) ?? [];

  // Shorten source names for bar chart
  const sourceData = data?.eventsBySource.map(s => ({
    ...s,
    label: SOURCE_LABELS[s.source] ?? s.source,
    total: s.phone_click + s.email_click + s.sms_click + s.contact_form_submitted,
  })) ?? [];

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="pt-6 h-24 bg-gray-100 rounded" />
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Track how visitors contact O.R.E. Plumbing
          </p>
        </div>
        <div className="flex items-center gap-2">
          {usingTestData && (
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">
              Preview — test data
            </span>
          )}
          <div className="flex rounded-lg border border-gray-200 overflow-hidden text-sm">
            {RANGE_OPTIONS.map(opt => (
              <button
                key={opt.value}
                onClick={() => setDays(opt.value)}
                className={`px-3 py-1.5 font-medium transition-colors ${
                  days === opt.value
                    ? 'bg-slate-800 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Phone Calls"
          value={data.summary.totalPhoneCalls}
          icon="📞"
          color="text-blue-600"
        />
        <StatCard
          label="Email Clicks"
          value={data.summary.totalEmailClicks}
          icon="✉️"
          color="text-green-600"
        />
        <StatCard
          label="SMS Clicks"
          value={data.summary.totalSmsClicks}
          icon="💬"
          color="text-amber-600"
        />
        <StatCard
          label="Form Submissions"
          value={data.summary.totalFormSubmissions}
          icon="📋"
          color="text-purple-600"
        />
      </div>

      {/* Line chart — events over time */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Activity Over Time</CardTitle>
          <CardDescription>Daily breakdown of all contact events</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chartDays} margin={{ top: 4, right: 16, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="label"
                tick={{ fontSize: 11 }}
                interval={Math.floor(chartDays.length / 7)}
              />
              <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="phone_click"
                name="Phone Calls"
                stroke={COLORS.phone_click}
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="email_click"
                name="Email Clicks"
                stroke={COLORS.email_click}
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="sms_click"
                name="SMS Clicks"
                stroke={COLORS.sms_click}
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="contact_form_submitted"
                name="Form Submissions"
                stroke={COLORS.contact_form_submitted}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Bar chart + Pie chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Source bar chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Events by Source</CardTitle>
            <CardDescription>Which page or component drove the most contact</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart
                data={sourceData}
                layout="vertical"
                margin={{ top: 4, right: 16, left: 8, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11 }} allowDecimals={false} />
                <YAxis
                  type="category"
                  dataKey="label"
                  tick={{ fontSize: 11 }}
                  width={110}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="phone_click" name="Phone" stackId="a" fill={COLORS.phone_click} />
                <Bar dataKey="email_click" name="Email" stackId="a" fill={COLORS.email_click} />
                <Bar dataKey="sms_click" name="SMS" stackId="a" fill={COLORS.sms_click} />
                <Bar
                  dataKey="contact_form_submitted"
                  name="Form"
                  stackId="a"
                  fill={COLORS.contact_form_submitted}
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie chart — event type split */}
        <Card>
          <CardHeader>
            <CardTitle>Event Breakdown</CardTitle>
            <CardDescription>Total events by type</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-2 space-y-1 w-full text-sm">
              {pieData.map((entry, i) => (
                <div key={entry.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-3 h-3 rounded-full"
                      style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }}
                    />
                    <span className="text-gray-600">{entry.name}</span>
                  </div>
                  <span className="font-semibold text-gray-800">{entry.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent events table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Events</CardTitle>
          <CardDescription>Last 20 contact interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="pb-3 pr-4 font-medium">Event</th>
                  <th className="pb-3 pr-4 font-medium">Source</th>
                  <th className="pb-3 pr-4 font-medium">Details</th>
                  <th className="pb-3 font-medium">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.recentEvents.map(event => (
                  <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${eventBadgeClass(event.eventType)}`}
                      >
                        {EVENT_LABELS[event.eventType] ?? event.eventType}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-gray-600">
                      {SOURCE_LABELS[event.source ?? ''] ?? event.source ?? '—'}
                    </td>
                    <td className="py-3 pr-4 text-gray-500">
                      {event.metadata
                        ? Object.entries(event.metadata as Record<string, string>)
                            .map(([k, v]) => `${k}: ${v}`)
                            .join(' · ')
                        : '—'}
                    </td>
                    <td className="py-3 text-gray-400 whitespace-nowrap">
                      {formatDateTime(event.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
