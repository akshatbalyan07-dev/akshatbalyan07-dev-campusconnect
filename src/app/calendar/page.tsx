import { Calendar } from "@/components/ui/calendar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"

const savedEvents = [
  {
    id: '1',
    title: 'Nexus Conference 2024',
    date: '2024-10-26',
    time: '09:00 AM',
    venue: 'Grand Auditorium, Tech Park',
  },
  {
    id: '4',
    title: 'InnovateX Hackathon',
    date: '2024-11-22',
    time: '07:00 PM',
    venue: 'Engineering Building',
  },
];


export default function CalendarPage() {
  return (
    <div className="container py-8 md:py-12">
        <div className="space-y-4 mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Your Schedule</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                Keep track of your saved events and manage your time effectively. Never miss an important date.
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <Card>
                    <CardContent className="p-2 md:p-6">
                        <Calendar
                            mode="single"
                            className="w-full"
                        />
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Saved Events</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {savedEvents.length > 0 ? (
                            savedEvents.map(event => (
                                <div key={event.id} className="p-4 rounded-md border bg-secondary/30">
                                    <h3 className="font-semibold">{event.title}</h3>
                                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                        <Clock className="h-4 w-4" /> {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric'})}, {event.time}
                                    </p>
                                     <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                        <MapPin className="h-4 w-4" /> {event.venue}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-muted-foreground text-center py-8">
                                You have no saved events.
                            </p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  )
}
