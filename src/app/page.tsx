"use client";

import {
  Avatar,
  Box,
  Button,
  Container,
  Typography,
  Stack,
  useTheme,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgressProps,
  Link,
  IconButton,
  Fab,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import Header from "../components/Header";
import InstagramIcon from "@mui/icons-material/Instagram";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useRef, useState } from "react";
import { keyframes, useMediaQuery } from "@mui/system";
import Preloader from "@/components/preloader";
import { BackgroundElements } from "@/components/BackgroundElements";
import { useSelector } from "react-redux";

const flipAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const Home = () => {
  const theme = useTheme();
  const contactRef = useRef<HTMLDivElement>(null);
  const mode = useSelector((state: any) => state.theme.mode);
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const [showBackground, setShowBackground] = useState(true);
  const [flip, setFlip] = useState(false);
  const phrase = '"Full Stack Developer & React Native Developer"';
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackground(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timeout1: ReturnType<typeof setTimeout>;
    let timeout2: ReturnType<typeof setTimeout>;

    const startAnimation = () => {
      setFlip(true);
      timeout1 = setTimeout(() => {
        setFlip(false);
        timeout2 = setTimeout(startAnimation, 1000);
      }, 4000);
    };

    startAnimation();

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Food Delivery Website",
      description: "Foodmunch is a fully functional food ordering web application that enables users to browse menus and seamlessly place orders for either delivery or collection with a single click...",
      imageSrc: "food.png",
      LiveUrl: "https://foodmunch-demo.vercel.app/"
    },
    {
      title: "4K Image Gallery Like Pintrest",
      description: "ImageHub is a high-quality image discovery platform offering Pinterest-like functionality with advanced search, curated galleries, and one-click downloads. Features include dark mode support, multiple resolution options, and a responsive design optimized for all devices. This project showcases expertise in image management systems, search optimization, and modern web development practices",
      imageSrc: "ImageGallery.png",
      LiveUrl: "https://venkys-image-galleryapp.netlify.app" 
    },
    {
      title: "Todos Application",
      description: "TaskTracker is a comprehensive task management application designed to help users organize, prioritize, and monitor their daily progress. Users can create new tasks, edit existing ones, mark tasks as complete, and delete tasks as needed with real-time updates, persistent data storage, and progress tracking capabilities. Built with modern web technologies, this project demonstrates proficiency in CRUD operations, state management, and building user-friendly productivity tools.",
      imageSrc: "Todos Application.png",
      LiveUrl: "" // Leave empty if no live link
    },
   {
      title: "Static Websites",
      description: "Here in this Section You can See The Static Websites of Music Website,Tourism Website,Advanced technologies Websites ",
      imageSrc: "Static.png",
      LiveUrl: "https://codingwithvenky.netlify.app/" 
    },
    {
      title: "Responsive Websites",
      description: "Here in this Section You can See Responsive Websites of Food Website,Virtual Reality Website,Portfolio Websites ",
      imageSrc: "Responsive.png",
      LiveUrl: "https://codingwithvenky.netlify.app/" 
    },
    {
      title: "Dynamic Websites",
      description: "Here in this Section You can See The Dynamic Websites of Speed Typing Website,Random Joke Website,Image Resize Websites ",
      imageSrc: "Dynamic.png",
      LiveUrl: "https://codingwithvenky.netlify.app/" 
    },
    {
      title: "Chat Bot",
      description: "Meet Our ChatBot is an interactive conversational AI application built with JavaScript that provides real-time user engagement. Users can interact with the chatbot through natural conversation, asking questions and receiving instant responses. Features include message parsing, dynamic response generation, and interactive UI with animated chatbot avatars. This project demonstrates proficiency in JavaScript event handling, DOM manipulation.",
      imageSrc: "Chatbot.png",
      LiveUrl: "" //
    },
    {
      title: "Rocket Man Webiste",
      description: "RocketMan is a professional client website for aerospace rocket maintenance and premium services. Features a striking hero section, compelling value proposition messaging, and responsive design that converts visitors. ",
      imageSrc: "Rocket.png",
      LiveUrl: ""//
    },
    {
      title: "Agile24x7 Mobile App",
      description: "Developed and maintained a mobile application using React Native to track and display daily performance metrics. Implemented interactive UI components, integrated APIs for real-time data updates, and ensured cross-platform compatibility Deployed to App Store and Playstore ",
      imageSrc: "Agile.png",
      LiveUrl: ""//
    },
];


  if (loading) return <Preloader />;

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Header />

      {!isMobile && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showBackground ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <BackgroundElements />
        </motion.div>
      )}

      <Container
        maxWidth="lg"
        sx={{
          py: 8,
          position: "relative",
          zIndex: 1,
          marginLeft: isMobile ? "0" : "250px",
          width: isMobile ? "100%" : "calc(100% - 250px)",
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            minHeight: "calc(100vh - 80px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 2,
            pl: { xs: 2, sm: 6, md: 12, lg: 24, xl: 30 },
          }}
        >
          <Avatar
            src="avt.png"
            alt="Venkatesh Dasari"
            sx={{
              width: 150,
              height: 150,
              border: "none",
              boxShadow: "none",
              padding: 0,
              objectFit: "cover",
              backgroundColor: "transparent",
            }}
          />

          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 1, fontSize: 40 }}
          >
            Venkatesh Dasari
          </Typography>

          <Box sx={{ display: "inline-flex", alignItems: "center", mb: 3 }}>
            <Typography variant="subtitle1">I'm a&nbsp;</Typography>
            <Box
              sx={{
                display: "inline-block",
                perspective: "1000px",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  display: "inline-block",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.5s",
                  transform: flip ? "rotateX(360deg)" : "rotateX(0deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                {phrase}
              </Typography>
            </Box>
          </Box>

          {/* Social Icons */}
          <Box
            sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 3 }}
          >
            <IconButton
              component="a"
              href="https://www.instagram.com/venkyy_dasari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/venkatesh-dasarii/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://github.com/venkateshhdasari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            size="large"
            onClick={scrollToContact}
            sx={{
              borderRadius: "30px",
              padding: "7px 24px",
            }}
          >
            Contact me
          </Button>
        </Box>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box id="about" sx={{ pl: { xs: 4, sm: 6, md: 8 }, pt: 3 }}>
            <Typography
              variant="h4"
              sx={{ color: theme.palette.text.primary, mb: 2 }}
            >
              What I do
            </Typography>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <>
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: 700,
                    mb: 2,
                    letterSpacing: "0.5px",
                  }}
                >
                  Full-Stack Developer | Production-Grade Solutions
                </Typography>

                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    wordWrap: "break-word",
                    lineHeight: 1.7,
                    mb: 2,
                  }}
                >
                  As a Dedicated <strong>Full-Stack Developer</strong> with
                  hands-on experience designing, building, and deploying{" "}
                  <strong>production-grade web applications</strong> that
                  deliver
                  <strong>real business value</strong>. I have successfully
                  developed and maintained over{" "}
                  <strong>10 full-stack projects</strong>, including{" "}
                  <strong>e-commerce platforms</strong>, dashboards, and
                  automation tools, all built with a focus on{" "}
                  <strong>performance</strong>, <strong>scalability</strong>,
                  and <strong>clean architecture</strong>.
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    wordWrap: "break-word",
                    lineHeight: 1.7,
                    mb: 2,
                  }}
                >
                  My technical expertise spans <strong>React.js</strong>,{" "}
                  <strong>Node.js</strong>, <strong>Express.js</strong>,{" "}
                  <strong>Python</strong>, <strong>SQL</strong>, and{" "}
                  <strong>MongoDB</strong>, enabling me to engineer complete{" "}
                  <strong>end-to-end solutions</strong> from intuitive,
                  responsive UIs to <strong>secure</strong>,{" "}
                  <strong>optimized APIs</strong> and databases. I also work
                  extensively with <strong>React Native</strong> for mobile
                  application development, <strong>REST API integration</strong>
                  , and <strong>cloud deployment</strong> on{" "}
                  <strong>AWS</strong>, <strong>Vercel</strong>, and{" "}
                  <strong>Render</strong>, ensuring{" "}
                  <strong>high availability</strong> and{" "}
                  <strong>robust performance</strong> across environments.
                </Typography>

                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    wordWrap: "break-word",
                    lineHeight: 1.7,
                    mb: 2,
                  }}
                >
                  Holding an <strong>MSc in Data Analytics Management</strong>{" "}
                  from Wrexham University (UK), I bring{" "}
                  <strong>analytical precision</strong> and{" "}
                  <strong>structured problem-solving</strong> into every
                  development cycle. This background strengthens my ability to
                  design <strong>data-driven backend logic</strong>, model
                  efficient database schemas, and make informed technical
                  decisions based on <strong>performance insights</strong>.
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    wordWrap: "break-word",
                    lineHeight: 1.7,
                    mb: 2,
                  }}
                >
                  I follow <strong>modern Agile</strong> and{" "}
                  <strong>GitHub Flow development practices</strong>,
                  collaborating through <strong>sprints</strong>,{" "}
                  <strong>pull requests</strong>, and{" "}
                  <strong>peer reviews</strong>. Experienced with{" "}
                  <strong>CI/CD pipelines</strong>,{" "}
                  <strong>containerization (Docker)</strong>, and hosting
                  platforms, I deploy applications seamlessly across production
                  environments, maintaining smooth integration from code to
                  deployment. I'm also proficient with testing frameworks like{" "}
                  <strong>Jest</strong> and <strong>Postman</strong> to ensure{" "}
                  <strong>quality</strong> and <strong>reliability</strong>{" "}
                  throughout delivery.
                </Typography>

                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    wordWrap: "break-word",
                    lineHeight: 1.7,
                    mb: 2,
                    fontWeight: 500,
                  }}
                >
                  My approach combines{" "}
                  <strong>clean engineering principles</strong> with usability,
                  creating applications that are <strong>functional</strong>,{" "}
                  <strong>efficient</strong>, and <strong>user-focused</strong>.
                </Typography>

                <Typography
                  variant="h6"
                  color="primary"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: 1000,
                    mt: 3,
                    mb: 1,
                    letterSpacing: "0.5px",
                  }}
                >
                  Core Skills
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    wordWrap: "break-word",
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  <strong>React.js</strong> • <strong>Node.js</strong> •{" "}
                  <strong>Express.js</strong> • <strong>Python</strong> •{" "}
                  <strong>SQL</strong> • <strong>MongoDB</strong> •{" "}
                  <strong>React Native</strong> • <strong>REST APIs</strong> •{" "}
                  <strong>HTML5</strong> • <strong>CSS3</strong> •{" "}
                  <strong>JavaScript (ES6+)</strong> •{" "}
                  <strong>Authentication (JWT/OAuth2)</strong> •{" "}
                  <strong>AWS</strong> • <strong>Docker</strong> •{" "}
                  <strong>Render</strong> • <strong>Netlify</strong> •{" "}
                  <strong>GitHub Pages</strong> • <strong>Vercel</strong> •{" "}
                  <strong>CI/CD</strong> •{" "}
                  <strong>Agile Software Development</strong> •{" "}
                  <strong>Testing (Jest, Postman)</strong>
                </Typography>

                <Typography
                  variant="body1"
                  color="success"
                  sx={{
                    wordWrap: "break-word",
                    textTransfrom: "uppercase",
                    lineHeight: 1.7,
                    fontWeight: 600,
                    fontSize: "1.07rem",
                    mt: 3,
                  }}
                >
                  Currently Open to:{" "}
                  <strong>
                    Full-Stack Developer & React Native Developer Roles
                  </strong>{" "}
                  across the UK, where I can contribute to building{" "}
                  <strong>scalable</strong>, <strong>reliable</strong>, and{" "}
                  <strong>impactful web and mobile applications</strong> from
                  concept to deployment. I hold a{" "}
                  <strong>2-year Post Study Work Visa</strong> valid until May
                  2028, which allows me to work in the UK without requiring
                  sponsorship.
                </Typography>
              </>
            </motion.div>
          </Box>
        </motion.div>

        {/* Skills & Tools Section */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box mt={12} id="skills" sx={{ pl: { xs: 4, sm: 6, md: 8 } }}>
            <Typography
              variant="h4"
              sx={{ color: theme.palette.text.primary, mb: 2 }}
            >
              Top Skills & Technologies
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
                justifyContent: "center",
              }}
            >
              {/* Programming Languages */}
              <Box
                sx={{
                  flex: "1 1 300px",
                  maxWidth: "450px",
                  p: 3,
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #9c27b0, #1b1b3a)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" sx={{ color: "#ffffff", mb: 3 }}>
                  Programming Languages
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 4,
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      src="js.png"
                      alt="Javascript"
                      sx={{ width: 70, height: 50, mb: 1 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      Javascript
                    </Typography>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      src="ts.png"
                      alt="TypeScript"
                      sx={{ width: 70, height: 50, mb: 1 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      TypeScript
                    </Typography>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      src="python.svg"
                      alt="Python"
                      sx={{ width: 70, height: 50, mb: 1 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      Python
                    </Typography>
                  </motion.div>
                   <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      src="Sql.png"
                      alt="SQL"
                      sx={{ width: 70, height: 50, mb: 1 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      SQL
                    </Typography>
                  </motion.div>
                </Box>
              </Box>

              {/* Tools & Technologies */}
              <Box
                sx={{
                  flex: "1 1 300px",
                  maxWidth: "450px",
                  p: 3,
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #9c27b0, #1b1b3a)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" sx={{ color: "#ffffff", mb: 3 }}>
                  Tools & Technologies
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 4,
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      src="github.png"
                      alt="GitHub"
                      sx={{ width: 120, height: 60, mb: 1 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      GitHub
                    </Typography>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      src="vscode.png"
                      alt="VS Code"
                      sx={{ width: 60, height: 60, mb: 1 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      VS Code
                    </Typography>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      src="react.png"
                      alt="React"
                      sx={{ width: 60, height: 60, mb: 1 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      React Js
                    </Typography>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      src="react.png"
                      alt="React Native"
                      sx={{ width: 60, height: 60, mb: 1 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      React Native
                    </Typography>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      src="nextjs.webp"
                      alt="Next.js"
                      sx={{ width: 60, height: 60, mb: 1 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      Next.js
                    </Typography>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      src="mui.png"
                      alt="MUI"
                      sx={{ width: 60, height: 60, mb: 1 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      MUI
                    </Typography>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      src="node.png"
                      alt="Nodejs"
                      sx={{ width: 60, height: 60, mb: 1 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      Node Js
                    </Typography>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      src="express.png"
                      alt="Express Js"
                      sx={{ width: 60, height: 60, mb: 1 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      Express Js
                    </Typography>
                  </motion.div>
                </Box>
              </Box>
            </Box>
            <SkillsSection />
          </Box>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            mt={12}
            id="experience"
            sx={{
              borderRadius: "16px",
              padding: "24px",
              pl: { xs: 4, sm: 6, md: 8 },
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: theme.palette.text.primary, mb: 2 }}
            >
              My Experience
            </Typography>

            {/* Experience Card */}
            <Box
              sx={{
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  mb: 1,
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.primary.main,
                    mr: { lg: 1, xs: 0 },
                    fontWeight: 600,
                    fontSize:"1.5rem"
                  }}
                >
                  Tech Grids
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: theme.palette.text.primary }}
                >
                  (Full Stack Developer)
                </Typography>
              </Box>

              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.text.secondary, mb: 2 }}
              >
                Feb 2025 – Present
              </Typography>

              <List sx={{ color: theme.palette.text.secondary }}>
                <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="I led the design and development of a scalable e-commerce web application that utilized a React.js frontend and a Node.js/Express.js backend, catering to over 2,000 daily users and processing 1,500 transactions daily." />
                </ListItem>
                <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="I implemented robust authentication and authorization systems that leveraged JWT and OAuth2, achieved zero security breaches during my tenure, and enabled role-based user access.
thereby boosting system efficiency by 25%.
" />
                </ListItem>
                <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Improved API response times by 30% through comprehensive query optimization" />
                </ListItem>
                <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Created modular, reusable UI components using Tailwind CSS and Material UI, which ensured responsive design across diverse devices and improved user engagement metrics by 20%." />
                </ListItem>
                <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Led the setup and automation of CI/CD pipelines using GitHub Actions, Docker, and AWS/Vercel deployment platforms, reducing deployment time by 40% and minimizing downtime" />
                </ListItem>
                <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="I utilized Postman and Jest for rigorous API testing and unit/integration test coverage, consistently maintaining 90%+ test coverage and promoting early bug detection." />
                </ListItem>
                 <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Tech Stack: React.js | Node.js | Express.js | Python | PostgreSQL | MongoDB | Tailwind CSS | Material UI | AWS | Docker | GitHub Actions | JWT | OAuth2 | Postman | Jest | Agile | CI/CD" />
                </ListItem>
              </List>
            </Box>
             <Box
              sx={{
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  mb: 1,
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "greenyellow",
                    mr: { lg: 1, xs: 0 },
                    fontWeight: 600,
                    fontSize:"1.5rem"
                  }}
                >
                  Novisync Inc
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: theme.palette.text.primary }}
                >
                  (React Native Developer)
                </Typography>
              </Box>

              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.text.secondary, mb: 2 }}
              >
                June 2023 – June 2024
              </Typography>

              <List sx={{ color: theme.palette.text.secondary }}>
                <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Led the development team of 4 Members and the launch of two task management applications on the Google Play Store and App Store, driving a measurable increase in daily active users and improving retention rates" />
                </ListItem>
                <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Enhanced profitability by 25% by aligning application development with entrepreneurial course modules and implementing monetization strategies
" />
                </ListItem>
                <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Optimized website performance and accessibility, resulting in faster load times and improved SEO rankings that boosted organic traffic." />
                </ListItem>
                <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Designed and implemented an intuitive user interface, improving user experience scores and increasing session durations." />
                </ListItem>
                <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Streamlined service workflows through process re-engineering, achieving a 15% improvement in operational efficiency and reducing delivery bottlenecks." />
                </ListItem>
                <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Collaborated using Agile methodologies, version control through GitHub, and coordinated deployments using CI/CD pipelines for seamless app updates." />
                </ListItem>
                 <ListItem
                  sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      mr: 1,
                      color: theme.palette.success.main,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Tech Stack: React Native • JavaScript (ES6+) • Redux • REST APIs • Node.js • Firebase • GitHub • Figma • Agile Development • CI/CD • Google Play Store, App Store Deployment" />
                </ListItem>
              </List>
            </Box>
          </Box>
        </motion.div>

        {/* Projects Section */}
        <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <Box mt={12} id="projects" sx={{ pl: { xs: 4, sm: 6, md: 8 } }}>
    <Typography
      variant="h4"
      sx={{
        color: theme.palette.text.primary,
        mb: 4,
        fontWeight: "bold",
      }}
    >
      Projects
    </Typography>

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 3,
      }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          style={{
            width: "calc(33.33% - 20px)",
            minWidth: "280px",
            marginBottom: "24px",
          }}
        >
          <Paper
            sx={{
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor:
                theme.palette.mode === "dark" ? "#1c1c1c" : "#ffffff",
              boxShadow:
                theme.palette.mode === "dark"
                  ? "8px 8px 16px #121212, -8px -8px 16px #262626"
                  : "8px 8px 16px #d9d9d9, -8px -8px 16px #ffffff",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "12px 12px 24px #121212, -12px -12px 24px #262626"
                    : "12px 12px 24px #d9d9d9, -12px -12px 24px #ffffff",
              },
            }}
          >
            {/* Image Section */}
            <Box
              sx={{
                height: "180px",
                overflow: "hidden",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#0d0d0d" : "#f0f0f0",
              }}
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Content Section */}
            <Box sx={{ p: 2, flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                  mb: 1,
                }}
              >
                {project.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 2,
                  flexGrow: 1,
                }}
              >
                {project.description}
              </Typography>

              {/* Live Demo Button */}
              {project.LiveUrl && (
                <Button
                  href={project.LiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    fontSize: "0.875rem",
                    backgroundColor: theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Live Demo
                </Button>
              )}
            </Box>
          </Paper>
        </motion.div>
      ))}
    </Box>
  </Box>
</motion.div>


        {/* Education & Address Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box mt={12} id="education" sx={{ pl: { xs: 4, sm: 6, md: 8 } }}>
            <EducationTimeline />
          </Box>
        </motion.div>

        {/* Contact Section */}
        <div ref={contactRef} id="contactus">
          <ContactSection />
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScroll ? 1 : 0, scale: showScroll ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Fab
          color="primary"
          aria-label="scroll back to top"
          onClick={scrollTop}
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 1000,
            transition: "opacity 0.3s, transform 0.3s",
            boxShadow: theme.shadows[6],
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      </motion.div>
    </Box>
  );
};

export default Home;

// Reusable Project Card component
interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => {
  const theme = useTheme();

  return (
    <Box
      p={3}
      borderRadius={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: 2,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ color: theme.palette.text.primary }}
        gutterBottom
      >
        {title}
      </Typography>
      <Typography color="text.secondary">{description}</Typography>
    </Box>
  );
};

// SkillsSection Component
const SkillsSection = () => {
  const theme = useTheme();

  const skillsData = [
    { name: "HTML 5", percentage: 100, color: "#ff9800" },
    { name: "CSS", percentage: 95, color: "#4285f4" },
     { name: "JavaScript", percentage: 95, color: "#ffeb3b" },
    { name: "ReactJs", percentage: 88, color: "#80d8ff" },
    { name: "NodeJs", percentage: 88, color: "##26d9a0" },
    { name: "ExpressJs", percentage: 88, color: "#26d9b5" },
    { name: "Next.js", percentage: 85, color: "#ffffff" },
     { name: "SQL", percentage: 95, color: "#d4ca71" },
    { name: "React Native", percentage: 95, color: "#8bc34a" },
    { name: "Git", percentage: 90, color: "#f1502f" },

    { name: "MUI", percentage: 90, color: "#007fff" },
  ];
  const [progress, setProgress] = useState(skillsData.map(() => 0));

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) =>
        prev.map((val, i) => (val < skillsData[i].percentage ? val + 1 : val))
      );
    }, 15);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Box
        mt={12}
        id="detailed-skills"
        sx={{
          p: 4,
          borderRadius: "8px",
          background: "linear-gradient(135deg, #1b1b3a, #0a0a1a)",
          color: theme.palette.text.primary,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#ffffff", mb: 4, textAlign: "center" }}
        >
          Technical Expertise
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          {skillsData.map((skill, index) => (
            <Box key={index} sx={{ mb: 1 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1">{skill.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {progress[index]}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={progress[index]}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: skill.color,
                  },
                  transition: "all 0.3s ease",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

const EducationTimeline = () => {
  const theme = useTheme();

  const TimelineContainer = styled(Box)({
    position: "relative",
    width: "100%",
    padding: "40px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "20px",
      bottom: "0",
      width: "2px",
      backgroundColor: theme.palette.primary.main,
      zIndex: 1,
    },
  });

  const TimelineItem = styled(Box)({
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    marginBottom: theme.spacing(4),
    paddingLeft: "60px",
    zIndex: 2,
    width: "100%",
  });

  const TimelineDot = styled(Box)({
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.background.default}`,
    position: "absolute",
    left: "13px",
    top: "5px",
    zIndex: 3,
  });

  const IconContainer = styled(Box)({
    position: "absolute",
    left: "0",
    top: "0",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 4,
  });

  const DescriptionBox = styled(Box)({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    textAlign: "left",
    flexGrow: 1,
    color: theme.palette.text.secondary,
    boxShadow: theme.shadows[3],
  });

  const YearText = styled(Typography)({
    color: theme.palette.text.primary,
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  });

  const CGPAContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
    width: "100%",
  });

  interface StyledLinearProgressProps extends LinearProgressProps {
    barcolor: string;
  }

  const StyledLinearProgress = styled(
    LinearProgress
  )<StyledLinearProgressProps>(({ barcolor }) => ({
    height: 8,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexGrow: 1,
    "& .MuiLinearProgress-bar": {
      backgroundColor: barcolor,
      transition: "transform 0.8s ease, width 0.8s ease", // smooth animation
    },
  }));

  const educationData = [
    {
      years: "2024 - 2025",
      degree: "Msc in Business Management & Data Analytics",
      institution:
        "Wrexham Glyndwr University, Wrexham ,United Kingdom",
      cgpa: "8.0",
      totalCgpa: 10,
      barColor: "#eee4d9",
    },
    {
      years: "2019 - 2023",
      degree: "Bacheolors",
      institution:
        "Rajiv Gandhi University Of Knowledge and Technologies, Ongole",
      cgpa: "8.6",
      totalCgpa: 10,
      barColor: "#f57c00",
    },
    {
      years: "2017 - 2019",
      degree: "Pre University Course",
      institution:
        "Rajiv Gandhi University Of Knowledge and Technologies, Ongole",
      cgpa: "8.56",
      totalCgpa: 10,
      barColor: "#4caf50",
    },
    {
      years: "2016 - 2017",
      degree: "10th",
      institution: "ZPHS, Cherukuru",
      additionalInfo: "Secondary School Certificate (SSC)",
      cgpa: "9.8",
      totalCgpa: 10,
      barColor: "#2196f3",
    },
  ];

  // Track animated values
  const [progressValues, setProgressValues] = useState(
    Array(educationData.length).fill(0)
  );

  useEffect(() => {
    const animation = setInterval(() => {
      setProgressValues((prev) =>
        prev.map((val, i) => {
          const target =
            (parseFloat(educationData[i].cgpa) / educationData[i].totalCgpa) *
            100;
          return val < target ? val + 2 : target; // speed of animation
        })
      );
    }, 30);

    return () => clearInterval(animation);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "80vh",
        color: "white",
        // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Typography variant="h4" sx={{ mb: 6, color: "white", fontWeight: 600 }}>
        Education
      </Typography>

      <TimelineContainer>
        {educationData.map((item, index) => (
          <TimelineItem key={index}>
            <IconContainer>
              <SchoolIcon sx={{ color: "white", fontSize: 20 }} />
            </IconContainer>
            <TimelineDot />
            <DescriptionBox>
              <YearText variant="body2">{item.years}</YearText>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                }}
              >
                {item.degree}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {item.institution}
              </Typography>
              {item.additionalInfo && (
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {item.additionalInfo}
                </Typography>
              )}
              <CGPAContainer>
                <Box sx={{ flexGrow: 1, mr: 2 }}>
                  <StyledLinearProgress
                    variant="determinate"
                    value={progressValues[index]}
                    barcolor={item.barColor}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                  }}
                >
                  {item.cgpa} CGPA
                </Typography>
              </CGPAContainer>
            </DescriptionBox>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </Box>
  );
};

const navigationLinks = [
  { name: "About me", href: "#about" },
  { name: "Skills & Tools", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
   { name: "Contact us", href: "#contactus" },
];

const socialLinks = [
  {
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/venkatesh-dasarii/",
  },
  { icon: <WhatsAppIcon />, href: "https://wa.me/447823724421" },
  { icon: <PhoneIcon />, href: "tel:4407823724421" },
  { icon: <MailOutlineIcon />, href: "mailto:venkateshdasari0101@gmail.com" },
];

const ContactSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        py: 8,
        textAlign: "left",
        color: theme.palette.text.primary,
        fontFamily: "sans-serif",
        pl: { xs: 2, sm: 6, md: 12, lg: 24, xl: 30 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h3" component="h1" mb={2}>
          Contact Me
        </Typography>

        <Typography
          variant="h6"
          sx={{
            background: "linear-gradient(45deg, #FF66FF 30%, #6666FF 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 6,
            textTransform:"capitalize"
          }}
        >
          I'd love to hear from you! Whether you have questions about my work or a website concept in mind, feel free to reach out. Let's collaborate and turn your ideas into powerful, functional software solutions.
        </Typography>

        {/* Navigation Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            gap: { xs: 2, sm: 4 },
            mb: 6,
            flexWrap: "wrap",
          }}
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              sx={{
                color: theme.palette.text.primary,
                textDecoration: "none",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {link.name}
            </Link>
          ))}
        </Box>

        {/* Social Icons */}
        <Box sx={{ mb: 4 }}>
          {socialLinks.map((link, index) => (
            <IconButton
              key={index}
              href={link.href}
              target="_blank"
              sx={{
                mx: 1,
                color: theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {link.icon}
            </IconButton>
          ))}
        </Box>

        {/* Footer Text */}
        <Box mt={4}>
          <Typography variant="body1" color="text.primary" mb={1}>
            Designed & Developed by Venkatesh Dasari
          </Typography>
          <Typography variant="body2" color="text.secondary">
            © 2025 Venkatesh Dasari. All rights reserved.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};
