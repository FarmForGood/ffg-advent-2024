import Door from "./Door";

const DAYS = [
  {
    day: 1,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 2,
    word: "Mélange",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/4_Oi3wwk0FX5",
  },
  {
    day: 3,
    word: "Belge et Bio",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/6RP2Zxvn6LmZ",
  },
  {
    day: 4,
    word: "Amis",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/l1be5iLvxCEe",
  },
  {
    day: 5,
    word: "Moutarde",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/qkQ4VaoxBNyb",
  },
  {
    day: 6,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 7,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 8,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 9,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 10,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 11,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 12,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 13,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 14,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 15,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 16,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 17,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 18,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 19,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 20,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 21,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 22,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 23,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
  {
    day: 24,
    word: "Copains",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/1f8JAEjGcfF85zVPJXD24AC7I0/-u3u6kihBKq2",
  },
];

const AdventCalendar = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 max-w-4xl w-full">
      {DAYS.map((day, i) => (
        <Door key={i} url={day.url} day={i + 1} word={day.word} />
      ))}
    </div>
  );
};

export default AdventCalendar;
