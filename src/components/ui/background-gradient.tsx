import React from "react";

const colorSchemes = {
    blue: {
        background: "#60A5FA",
        circles: ["#4E71FF", "#A78BFA", "#0065F8", "#3B82F6", "#0F2F65", "#679EF8"],
    },
    ember: {
        background: "#431407",
        circles: ["#F97316", "#EA580C", "#FB923C", "#FDBA74", "#DC2626", "#FED7AA"],
    },
};

const circles = [
    {
        width: "687px",
        height: "521px",
        top: "23.25%",
        left: "26.72%",
        tx1: -0.1894,
        ty1: -0.8007,
        tx2: -0.9368,
        ty2: -0.12,
        tx3: -0.5575,
        ty3: 0.0602,
        tx4: 0.3657,
        ty4: 0.4741,
    },
    {
        width: "521px",
        height: "687px",
        top: "28.37%",
        left: "24.60%",
        tx1: 0.3813,
        ty1: 0.2026,
        tx2: -0.8279,
        ty2: 0.3383,
        tx3: -0.0991,
        ty3: -0.5716,
        tx4: 0.035,
        ty4: 0.3917,
    },
    {
        width: "521px",
        height: "521px",
        top: "22.69%",
        left: "3.82%",
        tx1: 0.1156,
        ty1: 0.159,
        tx2: -0.3001,
        ty2: 0.3193,
        tx3: -0.1404,
        ty3: 0.3908,
        tx4: -0.5032,
        ty4: 0.2224,
    },
    {
        width: "687px",
        height: "521px",
        top: "28.05%",
        left: "8.27%",
        tx1: 0.491,
        ty1: 0.366,
        tx2: 0.3841,
        ty2: 0.1078,
        tx3: -0.151,
        ty3: -0.5057,
        tx4: 0.2474,
        ty4: 0.1654,
    },
    {
        width: "687px",
        height: "687px",
        top: "28.74%",
        left: "28.14%",
        tx1: 0.3705,
        ty1: -0.3162,
        tx2: 0.3057,
        ty2: -0.9262,
        tx3: -0.0795,
        ty3: 0.2212,
        tx4: 0.178,
        ty4: -0.0017,
    },
    {
        width: "687px",
        height: "687px",
        top: "1.33%",
        left: "25.59%",
        tx1: -0.1754,
        ty1: 0.2373,
        tx2: -0.5778,
        ty2: -0.6463,
        tx3: 0.3439,
        ty3: 0.017,
        tx4: -0.1192,
        ty4: 0.3185,
    },
];

const BackgroundAnimation = ({ color = "blue" }: { color?: keyof typeof colorSchemes }) => {
    const selectedScheme = colorSchemes[color] || colorSchemes.blue;

    return (
        <>
            <div
                className="relative h-screen overflow-hidden transition-colors duration-500"
                style={{ backgroundColor: selectedScheme.background }}
            >
                <div className="absolute inset-0 blur-[100px]">
                    {circles.map((circle, index) => (
                        <svg
                            key={index}
                            className="animate-background-gradient absolute"
                            width={circle.width}
                            height={circle.height}
                            viewBox="0 0 100 100"
                            style={
                                {
                                    top: circle.top,
                                    left: circle.left,
                                    "--tx-1": circle.tx1,
                                    "--ty-1": circle.ty1,
                                    "--tx-2": circle.tx2,
                                    "--ty-2": circle.ty2,
                                    "--tx-3": circle.tx3,
                                    "--ty-3": circle.ty3,
                                    "--tx-4": circle.tx4,
                                    "--ty-4": circle.ty4,
                                } as React.CSSProperties
                            }
                        >
                            <circle cx="50" cy="50" r="50" fill={selectedScheme.circles[index]} />
                        </svg>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BackgroundAnimation;
