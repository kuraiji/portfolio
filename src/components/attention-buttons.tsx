"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import React from "react";

//relative z-10

// Wrap the Button component with motion
const MotionButton = motion(Button)
//""
export function GradientShift({className, variant, size, children} : React.ComponentPropsWithoutRef<typeof Button>) {
    return (
        <MotionButton
            className={`${className} w-28 text-white overflow-hidden relative`}
            variant={variant}
            size={size}
            style={{
                background: "linear-gradient(90deg, #4f46e5, #8b5cf6, #ec4899, #8b5cf6, #4f46e5)",
                backgroundSize: "400% 100%",
            }}
            animate={{
                backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
            }}
            transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
            }}
        >
            {children}
        </MotionButton>
    )
}

export default function AttentionButtons() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-12 bg-gray-50 dark:bg-gray-900">
            <h1 className="text-3xl font-bold text-center">Attention-Grabbing Buttons</h1>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 max-w-4xl w-full">
                {/* Breathing/Pulsing Effect */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-medium">Breathing Effect</h2>
                    <MotionButton
                        className="relative w-48 bg-primary"
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    >
                        Get Started
                    </MotionButton>
                    <p className="text-sm text-muted-foreground text-center max-w-xs">
                        Subtle scale animation that mimics breathing to draw attention without being distracting.
                    </p>
                </div>

                {/* Floating Button */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-medium">Floating Effect</h2>
                    <MotionButton
                        className="w-48 bg-primary"
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    >
                        Sign Up Now
                    </MotionButton>
                    <p className="text-sm text-muted-foreground text-center max-w-xs">
                        Gentle floating motion that creates a sense of lightness and draws the eye.
                    </p>
                </div>

                {/* Gradient Shift */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-medium">Gradient Shift</h2>
                    <MotionButton
                        className="w-48 text-white overflow-hidden relative"
                        style={{
                            background: "linear-gradient(90deg, #4f46e5, #8b5cf6, #ec4899, #8b5cf6, #4f46e5)",
                            backgroundSize: "400% 100%",
                        }}
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            ease: "linear",
                        }}
                    >
                        <span className="relative z-10">Try Premium</span>
                    </MotionButton>
                    <p className="text-sm text-muted-foreground text-center max-w-xs">
                        Shifting gradient background that creates visual interest and movement.
                    </p>
                </div>

                {/* Glowing Border */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-medium">Glowing Border</h2>
                    <div className="relative">
                        <motion.div
                            className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                            style={{ padding: "2px" }}
                            animate={{
                                opacity: [0.5, 1, 0.5],
                                boxShadow: [
                                    "0 0 5px rgba(79, 70, 229, 0.3)",
                                    "0 0 20px rgba(79, 70, 229, 0.6)",
                                    "0 0 5px rgba(79, 70, 229, 0.3)",
                                ],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                            }}
                        />
                        <Button className="relative w-48 bg-background text-foreground border-0">Limited Offer</Button>
                    </div>
                    <p className="text-sm text-muted-foreground text-center max-w-xs">
                        Animated glowing border that pulses to create a sense of urgency.
                    </p>
                </div>

                {/* Animated Icon */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-medium">Animated Icon</h2>
                    <MotionButton className="w-48 bg-primary">
                        <span>Take Action</span>
                        <motion.span
                            className="inline-block ml-2"
                            animate={{
                                x: [0, 5, 0],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                            }}
                        >
                            <ArrowRight className="w-4 h-4" />
                        </motion.span>
                    </MotionButton>
                    <p className="text-sm text-muted-foreground text-center max-w-xs">
                        Animated icon that suggests action and directs attention.
                    </p>
                </div>

                {/* Shimmer Effect */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-medium">Shimmer Effect</h2>
                    <div className="relative w-48 overflow-hidden">
                        <Button className="w-full bg-primary">Click Here</Button>
                        <motion.div
                            className="absolute inset-0 w-full h-full bg-white opacity-20"
                            style={{
                                clipPath: "polygon(0 0, 30% 0, 60% 100%, 0% 100%)",
                            }}
                            animate={{
                                x: [-200, 200],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                                ease: "easeInOut",
                                repeatDelay: 1,
                            }}
                        />
                    </div>
                    <p className="text-sm text-muted-foreground text-center max-w-xs">
                        Shimmering highlight that sweeps across the button to catch attention.
                    </p>
                </div>

                {/* Spotlight Effect */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-medium">Spotlight Effect</h2>
                    <div className="relative w-48">
                        <Button className="w-full bg-primary relative overflow-hidden">
                            <span className="relative z-10">Discover Now</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                                animate={{
                                    left: ["-100%", "200%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatDelay: 2,
                                }}
                            />
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground text-center max-w-xs">
                        Light sweep effect that creates a spotlight moving across the button.
                    </p>
                </div>

                {/* Animated Border */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-medium">Animated Border</h2>
                    <div className="relative p-[3px] overflow-hidden rounded-md bg-gray-200 dark:bg-gray-800">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-md"
                            style={{ backgroundSize: "200% 100%" }}
                            animate={{
                                backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                            }}
                        />
                        <Button className="relative w-48 bg-background border-0 text-foreground z-10">Join Waitlist</Button>
                    </div>
                    <p className="text-sm text-muted-foreground text-center max-w-xs">
                        Animated gradient border that continuously cycles through colors.
                    </p>
                </div>
            </div>
        </div>
    )
}