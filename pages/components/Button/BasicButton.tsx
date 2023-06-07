import { Button } from "@mui/material";
import Link from "next/link";

type BasicButtonProps = {
  href?: string;
  color: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

// ベーシックなボタンコンポーネント。color指定するだけで利用可能。
export const BasicButton: React.FC<BasicButtonProps> = ({
  href,
  color,
  children,
  style,
}) => (
  <Link href={href}>
    <Button
      variant="contained"
      sx={{
        color: "white",
        backgroundColor: color,
        "&:hover": {
          border: `1px solid ${color}`,
          backgroundColor: "white",
          color: color,
          boxShadow: "none",
        },
        fontSize: "18px",
        fontWeight: "bold",
        boxShadow: "none",
        ...style,
      }}
    >
      {children}
    </Button>
  </Link>
);
