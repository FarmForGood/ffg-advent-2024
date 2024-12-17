import Door from "./Door";

const DAYS = [
  {
    day: 1,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 2,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/4_Oi3wwk0FX5",
  },
  {
    day: 3,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/6RP2Zxvn6LmZ",
  },
  {
    day: 4,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/l1be5iLvxCEe",
  },
  {
    day: 5,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/qkQ4VaoxBNyb",
  },
  {
    day: 6,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 7,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 8,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 9,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 10,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 11,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 12,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 13,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 14,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 15,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 16,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 17,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 18,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 19,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 20,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 21,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 22,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 23,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 24,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
];

const AdventCalendar = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 max-w-4xl w-full">
      {DAYS.map((day, i) => (
        <Door key={i} url={day.url} day={i + 1} />
      ))}
    </div>
  );
};

export default AdventCalendar;
