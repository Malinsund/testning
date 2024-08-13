import { describe, expect, it } from "vitest";
import { sum } from "./sum";

describe("", () => {
    it("should sum two values", ()=> {
        expect(sum  (1, 2)).toBe(3);
    });
});
