import { type Education } from "@/app/types";

export function Education({ education }: { education: Education }) {
    return (
        <div className="py-1 md:py-2">
            <div className="flex items-center justify-between">
                <div className="font-bold lg:text-2xl md:text-xl text-base dark:text-gray-300 text-gray-600 py-2">
                    {education.instituteName}
                </div>

                <div className="font-semibold md:text-lg text-sm dark:text-gray-400 text-gray-500">
                    {education.date}
                </div>
            </div>

            <div className="md:text-base text-xs font-semibold text-blue-500 py-2 sm:py-0">
                {education.title}
            </div>
        </div>
    )
}