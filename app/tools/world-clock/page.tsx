"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

type City = {
  name: string;
  timezone: string;
};

const cities: City[] = [
  { name: "東京", timezone: "Asia/Tokyo" },
  { name: "ニューヨーク", timezone: "America/New_York" },
  { name: "ロンドン", timezone: "Europe/London" },
  { name: "パリ", timezone: "Europe/Paris" },
  { name: "シドニー", timezone: "Australia/Sydney" },
  { name: "ロサンゼルス", timezone: "America/Los_Angeles" },
  { name: "バンコク", timezone: "Asia/Bangkok" },
  { name: "ドバイ", timezone: "Asia/Dubai" },
];

export default function Page() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const update = () => {
      const nowTimes: Record<string, string> = {};
      cities.forEach((city) => {
        nowTimes[city.timezone] = new Date().toLocaleString("ja-JP", {
          timeZone: city.timezone,
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
      });
      setTimes(nowTimes);
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">世界時計</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <div key={city.timezone} className="relative gap-2 border rounded-sm">
            <CardContent className="p-4 text-center">
              <div className="text-lg font-semibold">{city.name}</div>
              <div className="text-3xl font-mono mt-1">
                {times[city.timezone] ?? "--:--:--"}
              </div>
            </CardContent>
          </div>
        ))}
      </div>
    </ToolPage>
  );
}
