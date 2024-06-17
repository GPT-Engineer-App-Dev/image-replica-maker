import { Box, Flex, Text, VStack, HStack, Divider, SimpleGrid, GridItem, Button, IconButton } from "@chakra-ui/react";
import { FaFilter, FaSyncAlt } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: '19-Mar-2024', pageviews: 400, projects: 240, signups: 2400 },
  { name: '26-Mar-2024', pageviews: 300, projects: 139, signups: 2210 },
  { name: '02-Apr-2024', pageviews: 200, projects: 980, signups: 2290 },
  { name: '09-Apr-2024', pageviews: 278, projects: 390, signups: 2000 },
  { name: '16-Apr-2024', pageviews: 189, projects: 480, signups: 2181 },
  { name: '23-Apr-2024', pageviews: 239, projects: 380, signups: 2500 },
  { name: '30-Apr-2024', pageviews: 349, projects: 430, signups: 2100 },
];

const Dashboard = () => {
  return (
    <Box p={4} w="full">
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">Homepage</Text>
        <HStack spacing={2}>
          <Button variant="outline" leftIcon={<FaSyncAlt />}>Customize homepage</Button>
          <Button variant="solid" colorScheme="teal">Invite members</Button>
        </HStack>
      </Flex>
      <SimpleGrid columns={3} spacing={4} mb={4}>
        <Box bg="white" p={4} boxShadow="md" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">Your recently viewed insights</Text>
          <VStack align="start" spacing={2} mt={2}>
            <Text>supabase_integrated_started count by pe...</Text>
            <Text>% of attempts completed</Text>
            <Text>supabase_integrated_started count & su...</Text>
            <Text>Projects with most errors</Text>
            <Text>Attempts created</Text>
          </VStack>
        </Box>
        <Box bg="white" p={4} boxShadow="md" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">Newly seen people</Text>
          <VStack align="start" spacing={2} mt={2}>
            <Text>patrickbustamante61@gmail.com</Text>
            <Text>tertez@gmail.com</Text>
            <Text>sX7JT6jXW9RgC5VgRYMGAJRWg2</Text>
            <Text>ercan32000@gmail.com</Text>
            <Text>289883491@qq.com</Text>
          </VStack>
        </Box>
        <Box bg="white" p={4} boxShadow="md" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">Recent recordings</Text>
          <VStack align="start" spacing={2} mt={2}>
            <Text>admin@tmapp.live - 5m 33s</Text>
            <Text>kristian@lovable.dev - 6m 3s</Text>
            <Text>kristian@lovable.dev - 10m 36s</Text>
            <Text>kristian@lovable.dev - 13m 25s</Text>
            <Text>kristian@lovable.dev - 6m 38s</Text>
          </VStack>
        </Box>
      </SimpleGrid>
      <Flex justify="space-between" align="center" mb={4}>
        <HStack spacing={2}>
          <Button variant="outline" leftIcon={<FaFilter />}>Last 90 days</Button>
          <Button variant="outline" leftIcon={<FaFilter />}>Add filter</Button>
        </HStack>
        <Text>Last updated 17 minutes ago</Text>
      </Flex>
      <SimpleGrid columns={3} spacing={4}>
        <Box bg="white" p={4} boxShadow="md" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">Pageview count</Text>
          <LineChart width={300} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pageviews" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </Box>
        <Box bg="white" p={4} boxShadow="md" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold"># of project created</Text>
          <BarChart width={300} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="projects" fill="#8884d8" />
          </BarChart>
        </Box>
        <Box bg="white" p={4} boxShadow="md" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">Signups (cumulative)</Text>
          <LineChart width={300} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="signups" stroke="#82ca9d" />
          </LineChart>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;