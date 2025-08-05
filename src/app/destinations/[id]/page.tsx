"use client";

import Image from "next/image";
import { useState } from "react";
import { notFound } from "next/navigation";

// Example mock data (replace with real data/fetch)
const destinations = [
	{
		id: "1",
		name: "Jaipur, India",
		images: [
			"/images/ancient-sandstone-arches-adorn-hindu-temple-courtyard-generated-by-ai.jpg",
			"/images/beautiful-castle-architecture.jpg",
			"/images/colorful-vibrant-indian-landscape_23-2151893897.avif",
			"/images/hawa-mahal-palace-windsin-morning-jaipur-rajasthan-india_163782-17387.avif",
		],
		description:
			"Majestic forts, vibrant bazaars, and royal palaces. Experience the timeless grandeur of Jaipur.",
		itinerary: [
			{
				day: 1,
				title: "Arrival & Amber Fort",
				details: "Arrive in Jaipur, visit the majestic Amber Fort.",
			},
			{
				day: 2,
				title: "City Palace & Bazaars",
				details: "Explore the royal City Palace and stroll through the vibrant local bazaars.",
			},
			{
				day: 3,
				title: "Hawa Mahal & Sunset View",
				details: "Visit the iconic Hawa Mahal and enjoy a sunset view from Nahargarh Fort.",
			},
		],
		price: "₹8,000",
		slots: 15,
		duration: "5 days",
		includes: [
			"Accommodation",
			"Guided Tours",
			"Some Meals",
			"Local Transport",
		],
	},
	// Add more destinations as needed
];

export default function DestinationDetails({ params }: { params: { id: string } }) {
	const destination = destinations.find((d) => d.id === params.id);
	if (!destination) return notFound();

	const [zoomImg, setZoomImg] = useState<string | null>(null);

	return (
		<div className="max-w-5xl mx-auto py-8 flex gap-8 flex-col md:flex-row">
			<div className="flex-1">
				<h1 className="text-4xl font-bold text-purple-800 mb-2">
					{destination.name}
				</h1>
				<div className="grid grid-cols-2 gap-4 mb-6">
					{destination.images.map((img, i) => (
						<div
							key={i}
							className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
							style={{ cursor: "pointer" }}
						>
							<Image
								src={img}
								alt={destination.name}
								width={400}
								height={300}
								className="object-cover w-full h-full"
							/>
						</div>
					))}
				</div>
				{/* Zoom Modal */}
				{zoomImg && (
					<div
						className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
						onClick={() => setZoomImg(null)}
					>
						<Image
							src={zoomImg}
							alt="Zoomed"
							width={900}
							height={700}
							className="rounded-lg object-contain max-h-[80vh] max-w-[90vw] border-4 border-white"
						/>
					</div>
				)}
				<h2 className="text-2xl font-semibold mb-2">About this trip</h2>
				<p className="mb-6">{destination.description}</p>
				<h2 className="text-2xl font-semibold mb-2">Full Itinerary</h2>
				<ul className="mb-6">
					{destination.itinerary.map((item, idx) => (
						<li key={idx} className="mb-4">
							<div className="flex items-center gap-2">
								<span className="bg-purple-700 text-white rounded-full px-3 py-1 font-bold">
									{item.day}
								</span>
								<span className="font-bold text-lg">{item.title}</span>
							</div>
							<div className="ml-10 text-gray-700">{item.details}</div>
						</li>
					))}
				</ul>
			</div>
			<div className="w-full md:w-96 bg-white rounded-xl shadow-lg p-6 h-fit">
				<h2 className="text-2xl font-semibold mb-4">Trip Details</h2>
				<div className="mb-2">
					<span className="font-bold">Price per person:</span>{" "}
					<span className="text-purple-700 text-xl font-bold">
						{destination.price}
					</span>
				</div>
				<div className="mb-2">
					<span className="font-bold">Available Slots:</span> {destination.slots}
				</div>
				<div className="mb-2">
					<span className="font-bold">Duration:</span> {destination.duration}
				</div>
				<div className="mb-2 font-bold">Includes:</div>
				<ul className="mb-4">
					{destination.includes.map((inc, idx) => (
						<li
							key={idx}
							className="flex items-center gap-2 text-green-600"
						>
							<span>✔️</span> {inc}
						</li>
					))}
				</ul>
				<button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
					Book This Trip
				</button>
				<div className="mt-4 text-gray-600 text-sm">
					Questions about this trip?{" "}
					<a
						href="#"
						className="text-orange-600 font-semibold"
					>
						Contact us
					</a>
				</div>
			</div>
		</div>
	);
}