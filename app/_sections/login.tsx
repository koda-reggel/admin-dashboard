"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/auth";
import bcrypt from "bcryptjs"; // Import bcryptjs
import { useRouter } from "next/navigation";

//icons
import { MdOutlineEmail } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

export default function Body() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  const handlePasswordVisibility = () => {
    setIsVisible(!isVisible); // Toggle the state
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(""); // Clear any previous error

    console.log("Email:", email); // Log email to verify it's correct
    console.log("Password:", password); // Log password to verify it's correct

    try {
      // Hash the password on the frontend before sending it to the backend
      // const hashedPassword = bcrypt.hashSync(password, 10); // Use bcrypt to hash the password (10 is the salt rounds)

      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password, // Send the hashed password
      });

      // Store the token in localStorage or handle the response as needed
      localStorage.setItem("token", response.data.token);

      // Optionally redirect the user or handle further actions after successful login
      router.push("/admin");
    } catch (error) {
      setError("Invalid credentials, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mx-auto justify-center  ">
      <Card className="flex flex-col gap-4 md:w-96 w-64">
        <CardHeader className="flex justify-center text-3xl">
          <p>Login</p>
        </CardHeader>
        <CardBody className="flex flex-col gap-8 ">
          <Input
            startContent={<MdOutlineEmail className="text-2xl gap-4 " />}
            value={email}
            label="Email"
            labelPlacement="outside"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <Input
            startContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={handlePasswordVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className=""
            value={password}
            label="Password"
            labelPlacement="outside"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            // type="password"
          />

          {error && <p className="text-red-500">{error}</p>}
        </CardBody>
        <CardFooter className="flex justify-center">
          {/* <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
            Remember me
          </Checkbox> */}

          <Button
            onPress={handleLogin}
            isLoading={loading}
            className="bg-green-500 w-full"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
