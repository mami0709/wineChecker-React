//@ts-nocheck
import React from "react";
import {AppBar, Box, Button, Toolbar, Typography, Tabs, Tab, } from "@mui/material";
import Link from "next/link";
import '../styles/Home.module.css' 
import { fontFamily } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

//上のやつ
	export const DefaultLayout: React.FC<{
		children: React.ReactNode;
	}> = ({ children }) => {

		const matches = useMediaQuery("(min-width:767px)"); //レスポンシブ設定を定義

		const [value, setValue] = React.useState(0);  //Tab設定のための定義
		const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
		};

		return (
				<Box sx={{
				backgroundColor: "rgb(245,245,245)",
				minHeight: "100vh",
				}}>

		{matches ? (
			<>
				<AppBar position="static" style={{backgroundColor: "rgb(139,0,139)"}}>
					<Toolbar>
						<Link href={"/"}>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 ,fontFamily: "HiraMinProN-W3", fontSize: "3rem", cursor: "pointer", }} >
								Wine Checker
							</Typography>
						</Link>
						
					<Link href={"/shindan/recommend"}>
						<Box style={{paddingRight: "20px", }}>
							<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit" indicatorColor="secondary" >
								<Tab label="おすすめ一覧" sx={{fontSize: "1.1rem", ":hover": {color: "black", border: "none",background: "rgba(0, 0, 0, 0.4)", background: "#DDA0DD", color: "#1b1b1b" }}}  />
							</Tabs>
						</Box>
					</Link>
					<Link href={"/shindan/aka"}>
						<Box style={{paddingRight: "20px"}}>
							<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit" indicatorColor="secondary">
								<Tab label="赤ワインで診断" sx={{fontSize: "1.1rem", ":hover": {color: "black", border: "none",background: "rgba(0, 0, 0, 0.4)", background: "#DDA0DD", color: "#1b1b1b" }}} />
							</Tabs>
						</Box>
					</Link>
					<Link href={"/shindan/shiro"}>
						<Box style={{paddingRight: "20px"}}>
							<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit" indicatorColor="secondary">
								<Tab label="白ワインで診断" sx={{fontSize: "1.1rem", ":hover": {color: "black", border: "none",background: "rgba(0, 0, 0, 0.4)", background: "#DDA0DD", color: "#1b1b1b" }}} />
							</Tabs>
						</Box>
					</Link>

					{/* 診断するボタン */}
					<Link href={"/shindan"}>
							<Button  color="inherit" sx={{ fontSize: "1.5rem", width: 170,  backgroundImage: "linear-gradient(170deg, #659de6, #5abab8)", ":hover":{opacity:0.9}}}>診断する</Button>
						</Link>
					</Toolbar>
				</AppBar>

				<Box
						sx={{
							textAlign: "center",
							margin: "0px auto",
							width: "100",
							height: "100vh"
						}}>
					{children}
				</Box>
			</>
		) : (
			<>

				<AppBar position="static" style={{backgroundColor: "rgb(139,0,139)"}}>
						<Link href={"/"}>
							<Typography variant="h6" component="div" sx={{textAlign: "center", paddingTop:"20px" ,flexGrow: 1 ,fontFamily: "HiraMinProN-W3", fontSize: "2rem"}} >
								Wine Checker
							</Typography>
						</Link>

					<Toolbar>
						<Link href={"/shindan/recommend"}>
							<Box style={{paddingRight: "0px", }}>
								<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit" indicatorColor="secondary" >
									<Tab label="おすすめ一覧" sx={{fontSize: "0.8rem"}}  />
								</Tabs>
							</Box>
						</Link>
						<Link href={"/shindan/aka"}>
							<Box style={{paddingRight: "0px"}}>
								<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit" indicatorColor="secondary">
									<Tab label="赤ワインで診断" sx={{fontSize: "0.8rem"}} />
								</Tabs>
							</Box>
						</Link>
						<Link href={"/shindan/shiro"}>
							<Box style={{paddingRight: "0px"}}>
								<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit" indicatorColor="secondary">
									<Tab label="白ワインで診断" sx={{fontSize: "0.8rem"}} />
								</Tabs>
							</Box>
						</Link>
					</Toolbar>
					{/* 診断するボタン */}
					<Link href={"/shindan"}>
						<Button  color="inherit" sx={{marginLeft: "auto",marginRight: "auto", marginTop: "5px", marginBottom: "10px", fontSize: "1rem", width: 140,  backgroundImage: "linear-gradient(170deg, #659de6, #5abab8)"}}>診断する</Button>
					</Link>
				</AppBar>

				<Box
						sx={{
							textAlign: "center",
							margin: "0px auto",
							width: "100",
						}}>
					{children}
				</Box>
				</>
			)}
		</Box>
		)
	}