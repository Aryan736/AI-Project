import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom brand colors for our Indian restaurant theme
        brand: {
          orange: "#F05A28",
          pink: "#E94057",
          purple: "#8A2387",
          cream: "#FFF8E8",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand": "linear-gradient(to right, #F05A28, #E94057, #8A2387)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: "inherit",
            a: {
              color: "#E94057",
              "&:hover": {
                color: "#F05A28",
              },
            },
            strong: {
              color: "inherit",
            },
            ol: {
              li: {
                "&::marker": {
                  color: "inherit",
                },
              },
            },
            ul: {
              li: {
                "&::marker": {
                  color: "inherit",
                },
              },
            },
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
            blockquote: {
              color: "inherit",
              borderLeftColor: "#E94057",
            },
            code: {
              color: "inherit",
            },
            pre: {
              color: "inherit",
              backgroundColor: "rgb(243 244 246)",
            },
            hr: {
              borderColor: "inherit",
              opacity: 0.3,
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config

