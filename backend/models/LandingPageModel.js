import mongoose from "mongoose";

const LandingPage = mongoose.Schema({
  title: String,
  subtitle: String,
  herodesc: String,
  experience: String,
  projects: String,
  supports: String,
  aboutdesc: String,
  qualification: [],
  skills: [],
  services: [],
  testimonial: [],
  contact: [],
});

export default mongoose.model("LandingPage", LandingPage);

// const landingpage = mongoose.model("LandingPage", LandingPage);

// const Services = mongoose.Schema({
//   servicename: {
//     type: String,
//     required: true,
//   },
// });

// const services = mongoose.model("Services", Services);

// const Skills = mongoose.Schema({
//   skillname: {
//     type: String,
//     required: true,
//   },
//   field: {
//     type: String,
//     required: true,
//   },
// });

// const skills = mongoose.model("Skills", Skills);

// const Qualification = mongoose.Schema({
//   position: {
//     type: String,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//   },
//   company: {
//     type: String,
//     required: true,
//   },
//   startyear: {
//     type: String,
//     required: true,
//   },
//   endyear: {
//     type: String,
//     required: true,
//   },
// });

// const qualification = mongoose.model("Qualification", Qualification);

// const Testimonial = mongoose.Schema({
//   testiname: {
//     type: String,
//     required: true,
//   },
//   occupation: {
//     type: String,
//     required: true,
//   },
//   testi: {
//     type: String,
//     required: true,
//   },
// });

// const testimonial = mongoose.model("Testimonial", Testimonial);

// const Contact = mongoose.Schema({
//   platform: {
//     type: String,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
// });

// const contact = mongoose.model("Contact", Contact);

// module.exports = {
//   Services: services,
//   Skills: skills,
//   Qualification: qualification,
//   Testimonial: testimonial,
//   Contact: contact,
// };
