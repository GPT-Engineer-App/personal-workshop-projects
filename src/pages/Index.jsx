import React from "react";
import { Box, Heading, Text, Image, Flex, Card, CardBody, Stack, Divider, Button, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    image: "https://images.unsplash.com/photo-1605981630067-e30bf8e24c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHByb2plY3R8ZW58MHx8fHwxNzExNTYzMjMyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    image: "https://images.unsplash.com/photo-1686236589375-15fd83d4584e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZXRhbHdvcmtpbmclMjBwcm9qZWN0fGVufDB8fHx8MTcxMTU2MzIzMnww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of project 3",
    image: "https://images.unsplash.com/photo-1676764589917-e1e659bd9774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHByb2plY3R8ZW58MHx8fHwxNzExNTYzMjMzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
];

const Index = () => {
  return (
    <Box>
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding={6} bg="gray.800" color="white">
        <Heading as="h1" size="xl" letterSpacing={"tighter"}>
          My Workshop
        </Heading>
        <Stack direction={"row"} spacing={6}>
          <Link href="https://github.com/yourusername" isExternal>
            <Icon as={FaGithub} w={8} h={8} />
          </Link>
          <Link href="https://www.linkedin.com/in/yourprofile/" isExternal>
            <Icon as={FaLinkedin} w={8} h={8} />
          </Link>
          <Link href="mailto:youremail@example.com" isExternal>
            <Icon as={FaEnvelope} w={8} h={8} />
          </Link>
        </Stack>
      </Flex>

      <Box as="section" padding={6}>
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="xl">Hi, I'm [Your Name], a passionate maker and creator. I love working on various projects in my workshop, ranging from woodworking to electronics.</Text>
      </Box>

      <Divider />

      <Box as="section" padding={6}>
        <Heading as="h2" size="xl" mb={4}>
          My Projects
        </Heading>
        <Flex wrap="wrap" justify="center">
          {projects.map((project, index) => (
            <Card key={index} maxW="sm" m={4}>
              <CardBody>
                <Image src={project.image} alt={project.title} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{project.title}</Heading>
                  <Text>{project.description}</Text>
                  <Button as={Link} href={project.link} variant="solid" colorScheme="blue">
                    Learn More
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
