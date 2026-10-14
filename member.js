function skillsMember() {
    // Core property definitions for the member's profile
    this.name = 'Ajay Dhangar';
    this.role = 'Full Stack Developer';
    this.experience = 5; // in years
    this.status = 'Active';

    // List of core technical proficiencies
    this.skills = [
        'JavaScript',
        'Node.js',
        'React.js',
        'Express.js',
        'MongoDB',
        'HTML5 & CSS3',
        'Git & GitHub'
    ];

    // Method to output basic profile summary to the console
    this.showProfile = function() {
        console.log(`Member: ${this.name}`);
        console.log(`Role: ${this.role}`);
        console.log(`Experience: ${this.experience} years`);
    };

    // Method to list all available skills
    this.listSkills = function() {
        console.log('Technical Skills:');
        this.skills.forEach(skill => {
            console.log(`- ${skill}`);
        });
    };

    // Method to dynamically add a new skill to the member profile
    this.addSkill = function(newSkill) {
        if (newSkill && !this.skills.includes(newSkill)) {
            this.skills.push(newSkill);
            console.log(`${newSkill} added successfully!`);
        } else {
            console.log('Skill already exists or invalid input.');
        }
    };
}
