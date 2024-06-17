import { Box, Flex, Text, IconButton, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaHome, FaChartBar, FaDatabase, FaCog, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" w="250px" h="100vh" p={4} boxShadow="md">
      <VStack align="start" spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Lovable Labs</Text>
        <Divider />
        <VStack align="start" spacing={2}>
          <Link to="/">
            <HStack>
              <FaHome />
              <Text>Home</Text>
            </HStack>
          </Link>
          <Link to="/dashboards">
            <HStack>
              <FaChartBar />
              <Text>Dashboards</Text>
            </HStack>
          </Link>
          <Link to="/data-management">
            <HStack>
              <FaDatabase />
              <Text>Data Management</Text>
            </HStack>
          </Link>
          <Link to="/settings">
            <HStack>
              <FaCog />
              <Text>Settings</Text>
            </HStack>
          </Link>
          <Link to="/profile">
            <HStack>
              <FaUser />
              <Text>Profile</Text>
            </HStack>
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Navbar;