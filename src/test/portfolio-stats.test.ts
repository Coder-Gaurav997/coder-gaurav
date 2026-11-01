import { describe, expect, it } from "vitest";
import { calculateAge, portfolioHighlights } from "@/lib/portfolio-stats";

describe("portfolio highlights", () => {
  it("shows the supplied project and book counts", () => {
    expect(portfolioHighlights).toEqual([
      { label: "Major Projects", value: "11+" },
      { label: "Books", value: "2" },
      { label: "Projects Built", value: "104+" },
    ]);
  });

  it("calculates age from the March 13, 2010 birthday", () => {
    expect(calculateAge(new Date(2026, 2, 12))).toBe(15);
    expect(calculateAge(new Date(2026, 2, 13))).toBe(16);
    expect(calculateAge(new Date(2026, 9, 20))).toBe(16);
  });
});