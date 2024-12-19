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
    word: "Speculoos",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/OycXxko2a8zXNWXpNkJlOyYy/7Cj3sKYn-Cl0",
  },
  {
    day: 7,
    word: "Mélange (2)",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/OycXxko2a8zXNWXpNkJlOyYy/MkIOOHmgbRgR",
  },
  {
    day: 8,
    word: "Amis (2)",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/OycXxko2a8zXNWXpNkJlOyYy/0bcs7PCac9sg",
  },
  {
    day: 9,
    word: "Innovation",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/OycXxko2a8zXNWXpNkJlOyYy/DUznacV0lYIP",
  },
  {
    day: 10,
    word: "Acrobate",
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/OycXxko2a8zXNWXpNkJlOyYy/gPhV4CPV8ZMS",
  },
  {
    day: 11,
    url: "https://emfik.r.ag.d.sendibm3.com/mk/mr/sh/OycXxko2a8zXNWXpNkJlOyYy/89MvZSZK7DWx",
    word: "Pionnier",
  },
  {
    day: 12,
    url: "https://emfik.r.sp1-brevo.net/mk/mr/sh/OycXxko2a8zXNWXpNkJlOyYy/LKpJz4Z_jTdc",
    word: "Méthode",
  },
  {
    day: 13,
    url: "https://emfik.r.sp1-brevo.net/mk/mr/sh/OycXxko2a8zXNWXpNkJlOyYy/veRrvY-vl-Sm",
    word: "Craquer",
  },
  {
    day: 14,
    url: "https://emfik.r.sp1-brevo.net/mk/mr/sh/OycXxko2a8zXNWXpNkJlOyYy/WEIxfGluyZ4Y",
    word: "Protozoaire",
  },
  {
    day: 15,
    word: "Moulin",
    url: "https://emfik.r.sp1-brevo.net/mk/mr/sh/OycXxko2a8zXNWXpNkJlOyYy/zbmDRhXr5tBI",
  },
  {
    day: 16,
    word: "Règne Fongique",
    url: "https://emfik.r.sp1-brevo.net/mk/mr/sh/OycXxko2a8zXNWXpNkJlOyYy/31lqyZdAQiPR",
  },
  {
    day: 17,
    url: "https://emfik.r.sp1-brevo.net/mk/mr/sh/OycXxko2a8zXNWXpNkJlOyYy/ZXxwES6GW27k",
    word: "Noirhomme",
  },
  {
    day: 18,
    url: "https://emfik.r.bh.d.sendibt3.com/mk/mr/sh/OycXxlTDIzvGSVSjwi8DEm4W/Lf1HApPjoFZw",
    word: "Joker",
  },
  {
    day: 19,
    url: "https://emfik.r.bh.d.sendibt3.com/mk/mr/sh/OycXxlTDIzvGSVSjwi8DEm4W/O7lv7FmrfAHQ",
    word: "Biscuits d'antan",
  },
  {
    day: 20,
    url: "https://emfik.r.bh.d.sendibt3.com/mk/mr/sh/OycXxlTDIzvGSVSjwi8DEm4W/oYdg5qkxPJ2o",
    word: "Levures",
  },
  {
    day: 21,
    url: "https://emfik.r.bh.d.sendibt3.com/mk/mr/sh/OycXxlTDIzvGSVSjwi8DEm4W/hAGuKlGo-fTK",
    word: "Burgers",
  },
  {
    day: 22,
    url: "https://emfik.r.bh.d.sendibt3.com/mk/mr/sh/OycXxlTDIzvGSVSjwi8DEm4W/u5PZFRG1-SNj",
    word: "Kamikaze",
  },
  {
    day: 23,
    url: "https://emfik.r.bh.d.sendibt3.com/mk/mr/sh/OycXxlTDIzvGSVSjwi8DEm4W/tngrBUWp37mh",
    word: "Open Compass",
  },
  {
    day: 24,
    url: "https://emfik.r.bh.d.sendibt3.com/mk/mr/sh/OycXxlTDIzvGSVSjwi8DEm4W/R2R_Q9W2n4Nl",
    word: "Sols",
  },
];

const AdventCalendar = () => {
  return (
    <>
      <div className="text-center text-white text-2xl p-12">
        Cliquez sur une porte pour retrouver le message du jour
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 max-w-4xl w-full">
        {DAYS.map((day, i) => (
          <Door key={i} url={day.url} day={i + 1} word={day.word} />
        ))}
      </div>
      <div className="text-center text-white text-4xl p-12">
        Nos meilleurs voeux et à l&apos;année prochaine !
      </div>
    </>
  );
};

export default AdventCalendar;
