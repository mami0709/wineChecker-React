import { Button } from "@mui/material";
import Link from "next/link";

type OutlineButtonProps = {
  href?: string;
  color: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

// 外枠のあるボタンコンポーネント。color指定するだけで利用可能。
export const OutlineButton: React.FC<OutlineButtonProps> = ({
  href,
  color,
  children,
  style,
}) => (
  <Link href={href}>
    <Button
      variant="outlined"
      sx={{
        borderColor: color,
        color: color,
        "&:hover": {
          backgroundColor: color,
          color: "white",
          borderColor: color,
        },
        fontSize: "18px",
        fontWeight: "bold",
        ...style,
      }}
    >
      {children}
    </Button>
  </Link>
);
