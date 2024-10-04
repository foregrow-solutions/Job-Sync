import { Component } from '@angular/core';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent {
  skills: string[] = ['JavaScript', 'Angular', 'React', 'Node.js']; // Replace with your list of skills

  experiences: string[] = ['Entry Level', 'Mid Level', 'Senior Level'];

  locations: string[] = ['Remote', 'New York', 'San Francisco', 'London']; // Replace with your list of locations

  selectedSkills: string[] = [];
  selectedExperience: string = '';
  selectedLocation: string = '';

  searchJobs(): void {
    // Implement your job search logic here
    console.log('Searching for jobs...');
  }

  removeSkill(skill: string): void {
    const index = this.selectedSkills.indexOf(skill);
    if (index !== -1) {
      this.selectedSkills.splice(index, 1);
    }
  }

  onSkillInput(event: any): void {
    // Your logic for handling skill input goes here
  }

  addSkill(skill: string): void {
    if (!this.selectedSkills.includes(skill)) {
      this.selectedSkills.push(skill);
    }
  }

}
