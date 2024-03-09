import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ultimate Collaboration Tools",
    avatar: "J",
    title: "Seamless Communication",
    description:
      "Dive into instant messaging, voice, and video calls to keep your team connected no matter where they are.",
  },
  {
    name: "Personalized User Experience",
    avatar: "A",
    title: "Role-Based Permissions",
    description:
      "Manage your community or team with flexible roles and permissions, granting the right access to the right people.",
  },
  {
    name: "Crystal-Clear Voice and Video",
    avatar: "M",
    title: "Next-Level Communication",
    description:
      "Experience crystal-clear voice and video calls regardless of your location. Our optimized call system ensures that you can connect with your team or community with unmatched clarity and reliability.",
  },
  {
    name: "Dedicated Channels",
    avatar: "M",
    title: "Organized Conversations",
    description:
      "Organize discussions by topics, projects, or teams in customizable channels, ensuring information stays relevant and accessible.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-left text-4xl text-white font-extrabold mb-10">
        Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-gradient-to-br from-zinc-800 to-zinc-600 border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
