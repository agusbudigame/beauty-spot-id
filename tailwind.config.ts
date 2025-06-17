
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#E8B4B8',
					foreground: '#FFFFFF',
					50: '#F7E7E7',
					100: '#F0D5D8',
					200: '#E8B4B8',
					300: '#E094A0',
					400: '#D87388',
					500: '#D63384',
					600: '#C12E73',
					700: '#AC2862',
					800: '#972151',
					900: '#821B40'
				},
				secondary: {
					DEFAULT: '#F7E7E7',
					foreground: '#2C2C2C'
				},
				accent: {
					DEFAULT: '#D63384',
					foreground: '#FFFFFF'
				},
				rose: {
					gold: '#E8B4B8',
					soft: '#F7E7E7',
					deep: '#D63384'
				},
				neutral: {
					warm: '#FAFAFA',
					charcoal: '#2C2C2C'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'rose-gradient': 'linear-gradient(135deg, #E8B4B8 0%, #F7E7E7 100%)',
				'accent-gradient': 'linear-gradient(135deg, #D63384 0%, #E8B4B8 100%)',
			},
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(232, 180, 184, 0.3), 0 4px 6px -2px rgba(232, 180, 184, 0.15)',
				'warm': '0 4px 25px -5px rgba(214, 51, 132, 0.25)',
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'float': 'float 3s ease-in-out infinite',
			},
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
