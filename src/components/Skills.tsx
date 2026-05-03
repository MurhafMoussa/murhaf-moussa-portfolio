import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import skillsData from "@/data/skills.json";
import { skillsSchema } from "@/lib/schemas";

const skillGroups = skillsSchema.parse(skillsData).skillGroups;

export default function Skills() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="title text-2xl sm:text-3xl">my skills.</h2>
            
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.title} className="border-border bg-card">
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-sm font-semibold text-primary shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
