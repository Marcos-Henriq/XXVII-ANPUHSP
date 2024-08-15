import { Paper } from "@mui/material";

interface ThumbProps {
  title: string;
  desc: string;
  date: string;
}

export default function ThumbContainer({ title, desc, date }: ThumbProps) {
  return (
    <Paper elevation={1} className="d-flex flex-column p-2 gap-2">
      <img src="/images/banner.png" className="w-100" />
      <h2 className="title">{title}</h2>
      {desc &&(
        <p className="text-default">{desc}</p>
      )}
      {date &&(
        <p className="text-default">{date}</p>
      )}
    </Paper>
  );
}
