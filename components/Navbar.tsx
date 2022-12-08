"use client";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { useAuth } from "../app/context/AuthContext";
import { useRouter } from "next/navigation";

const NavbarComp = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>NextJS Firebase Auth</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <div>
                <Nav.Link
                  onClick={() => {
                    logout();
                    router.push("/login");
                  }}
                >
                  Logout
                </Nav.Link>
              </div>
            ) : (
              <>
                <Link href="/signup" />
                <Link href="/login" />
                 
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
