import { vi, describe, it, expect, beforeEach } from "vitest";
import { getUserLocation } from "./getUserLocation";

describe("getUserLocation", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("resolves with coordinates when geolocation succeeds", async () => {
    const mockCoords = {
      coords: { latitude: 22.5429, longitude: 114.0596, accuracy: 50 },
      timestamp: Date.now(),
    } as GeolocationPosition;

    (navigator as any).geolocation = {
      getCurrentPosition: vi.fn((success) => success(mockCoords)),
    };

    const result = await getUserLocation();
    expect(result.coords.latitude).toBe(22.5429);
    expect(result.coords.longitude).toBe(114.0596);
  });

  it("rejects when geolocation fails", async () => {
    (navigator as any).geolocation = {
      getCurrentPosition: vi.fn((_success, error) =>
        error(new Error("User denied location"))
      ),
    };

    await expect(getUserLocation()).rejects.toThrow("User denied location");
  });

  it("rejects if geolocation is not available", async () => {
    delete (navigator as any).geolocation;

    await expect(getUserLocation()).rejects.toThrow(
      "Geolocation is not supported by this browser."
    );
  });
});
