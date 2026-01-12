"use client";

import { useEffect, useState } from "react";
import { fetchSections } from "@/lib/api";
import EventHeader from "@/components/EventHeader";
import SectionCard from "@/components/SectionCard";
import BottomBar from "@/components/BottomBar";

export default function Home() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetchSections()
    .then((data) => {
      console.log("API RESPONSE 👉", data);

      const list = Array.isArray(data)
        ? data
        : data.sections || [];

      const updated = list.map((item) => ({
        ...item,
        qty: 0,
      }));

      setSections(updated);
      setLoading(false);
    })
    .catch((err) => {
      console.error("API ERROR 👉", err);
      setLoading(false);
    });
}, []);

  const updateQty = (id, type) => {
    setSections((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "inc"
                  ? item.qty + 1
                  : Math.max(0, item.qty - 1),
            }
          : item
      )
    );
  };

  if (loading) {
    return <p style={{ padding: 20 }}>Loading tickets...</p>;
  }

  return (
    <div style={{ paddingBottom: 100 }}>
      <EventHeader />

     {sections.map((section) => (
  <div key={section.id}>
    <SectionCard
      section={section}
      onChange={updateQty}
    />
  </div>
))}

      <BottomBar sections={sections} />
    </div>
  );
}