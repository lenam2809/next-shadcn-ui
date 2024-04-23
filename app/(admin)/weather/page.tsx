import WeatherTableComponent from "./_components/table";

export default function WeatherPage() {
    return (
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <WeatherTableComponent />
        </div>
    )
}
