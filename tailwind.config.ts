import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1600px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        canvas: "hsl(var(--canvas))",
        ink: "hsl(var(--ink))",
        "arched-red": "hsl(var(--arched-red))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        display: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        caption: ['13px', { lineHeight: '1.5' }],
        body: ['17px', { lineHeight: '1.5' }],
        subheading: ['20px', { lineHeight: '1.5' }],
        'heading-sm': ['25px', { lineHeight: '1.5' }],
        heading: ['32px', { lineHeight: '1.15' }],
        'heading-lg': ['50px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        display: ['clamp(60px, 9vw, 109px)', { lineHeight: '1.06', letterSpacing: '-0.012em' }],
        'display-xl': ['clamp(72px, 11vw, 134px)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-xxl': ['clamp(84px, 13vw, 166px)', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
        'display-xxxl': ['clamp(96px, 16vw, 201px)', { lineHeight: '0.8', letterSpacing: '-0.07em' }],
      },
      spacing: {
        '17': '17px',
        '25': '25px',
        '50': '50px',
        '59': '59px',
        '84': '84px',
        '101': '101px',
        '134': '134px',
        '168': '168px',
        '174': '174px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius)",
        sm: "var(--radius)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
