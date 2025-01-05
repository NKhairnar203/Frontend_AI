import { Card } from "./ui/card";

export function TypographyMutedAI() {
  return (
    <div className="pt-1">
      <Card className={`w-[450px] p-3 `}>
        <p className="text-sm text-muted-foreground text-black">
          Enter your email address. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Laudantium, eveniet nam. Itaque, possimus ea ut
          tenetur illo laudantium saepe laborum quo illum, voluptatem ipsam
          adipisci, placeat vero voluptatum quidem labore.
        </p>
      </Card>
    </div>
  );
}
