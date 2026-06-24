export const portfolio = {
    name: "Flavio Cesar Mendoza Trinidad",
    shortName: "Flavio",
    title: "Computer Science & Math Student",
    location: "St. John's, NL",
    email: "flavio.mendotri@gmail.com",
    github: "https://github.com/FlavioT04",
    linkedin: "https://www.linkedin.com/in/flaviomt1/",
    about: `I'm currently studying Computer Science and Math at Memorial University of Newfoundland. ` +
            `I enjoy theoretical computer science and learning about programming languages. ` +
            `I also like typing on the keyboard; like, seriously I just find hitting keys satisfying.`,
    education: {
        school: "Memorial University of Newfoundland",
        degree: "Bachelor of Science (Hons) - Computer Science & Math",
        period: "May 2021 - Dec 2027 (Expected)",
    },
    projects: [
        {
            id: 1,
            name: "Lox Interpreter in Java",
            type: "Personal Project",
            period: "In Progress",
            tech: ["Java", "Eclipse"],
            description: "Developing a Lox interpreter in Java based on Crafting Interpreters by Robert Nystrom.",
        },
        {
            id: 2,
            name: "London Precipitation Predictor",
            type: "Academic Project",
            period: "Winter 2026",
            tech: ["Python", "NumPy", "Pandas", "Jupyter", "Matplotlib", "Scikit-learn"],
            description: "Built a linear regression model to predict precipitation in London using historical weather data.",
        },
        {
            id: 3,
            name: "Streaming Stock Market ELT Pipeline",
            type: "Personal Project",
            period: "Fall 2025",
            tech: ["Python", "Airflow", "Kafka", "Confluent Cloud", "PostgreSQL"],
            description: "Built a streaming ELT data pipeline that ingests stock market data, loads it into a database, and transforms raw records into analytics-ready tables.",
        },
        {
            id: 4,
            name: "Rail Travel Market Analysis Dashboard",
            type: "Personal Project",
            period: "Spring 2025",
            tech: ["Tableau"],
            description: "Built an interactive Tableau dashboard comparing countries by GDP per capita to evaluate market opportunities for a fictional rail travel booking startup.",
        },
    ],
    skills: {
        "Languages": ["C", "Java", "Python", "SQL", "R", "JavaScript"],
        "Data & ML": ["Scikit-learn", "NumPy", "Pandas", "GeoPandas", "Matplotlib", "Jupyter", "MySQL", "SQLAlchemy", "PostgreSQL", "Snowflake"],
        "DevOps & Tools": ["Kafka", "Airflow", "ETL/ELT Pipelines", "Git", "Linux", "Shell Scripting", "AWS", "Node.js", "React", "Docker"],
    },
    experience: [
        {
            id: 1,
            role: "Research Assistant",
            company: "Memorial University of Newfoundland – Psychology Department",
            period: "Sep 2024 – Dec 2025",
            points: [
                "Developed a simulation in Python to model Atlantic puffin movement and support research on puffin behaviour",
                "Processed shapefiles and raster data using GeoPandas to model the simulation environment",
                "Created plots with Matplotlib to visualize outcomes across different simulation instances",
            ],
        },
        {
            id: 2,
            role: "Math Teaching Assistant",
            company: "Memorial University of Newfoundland",
            period: "May 2024 – Aug 2024",
            points: [
                "Provided in-person support to first- and second-year students in Calculus and Linear Algebra",
            ],
        },
    ],
    certificates: [
        { id: 1, name: "Snowflake Data Engineering", date: "Jan 2026" },
        { id: 2, name: "ELT and Data Pipelines with Shell, Airflow, and Kafka", date: "Dec 2025" },
        { id: 3, name: "Linux Commands and Shell Scripting", date: "Dec 2025" },
        { id: 4, name: "AWS Cloud Technical Essentials", date: "Aug 2025" },
        { id: 5, name: "Tableau Business Intelligence Analyst", date: "Jun 2025" },
    ],
}