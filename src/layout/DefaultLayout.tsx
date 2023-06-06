import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import "../../styles/Home.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppTab from "../../pages/components/AppTab";
import ActionTab from "../../pages/components/ActionTab";

export const DefaultLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const matches = useMediaQuery("(min-width:767px)");
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("ログアウトしました。");
    window.location.replace("/");
    setIsAuthenticated(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgb(245,245,245)",
        minHeight: "100vh",
      }}
    >
      <AppBar
        position="static"
        style={{ backgroundColor: "rgb(139,0,139)", padding: "7px 0" }}
      >
        <Toolbar>
          <Link href={"/"}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "HiraMinProN-W3",
                fontSize: "3rem",
                cursor: "pointer",
              }}
            >
              Wine Checker
            </Typography>
          </Link>
          <AppTab
            value={value}
            handleChange={handleChange}
            label="ワインを投稿"
            href="/newPost"
          />
          <AppTab
            value={value}
            handleChange={handleChange}
            label="おすすめ一覧"
            href="/shindan/recommend"
          />
          {isAuthenticated ? (
            <ActionTab
              value={value}
              handleChange={handleChange}
              label="ログアウト"
              onClick={handleLogout}
            />
          ) : (
            <>
              <AppTab
                value={value}
                handleChange={handleChange}
                label="ユーザー登録"
                href="/login/Signup"
              />
              <AppTab
                value={value}
                handleChange={handleChange}
                label="ログイン"
                href="/login"
              />
            </>
          )}
          <Link href={"/shindan"}>
            <Button
              color="inherit"
              sx={{
                fontSize: "1.3rem",
                width: 170,
                backgroundImage: "linear-gradient(170deg, #659de6, #5abab8)",
                ":hover": { opacity: 0.9 },
              }}
            >
              診断する
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          textAlign: "center",
          margin: "0px auto",
          width: "100",
          height: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
