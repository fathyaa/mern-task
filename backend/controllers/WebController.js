import LandingPage from "../models/LandingPageModel.js";

export const getData = async (req, res) => {
  try {
    const alldata = await LandingPage.find();
    res.json(alldata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveData = async (req, res) => {
  const landingpagedata = new LandingPage(req.body);
  try {
    const inserteddata = await landingpagedata.save();
    res.status(201).json(inserteddata);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateData = async (req, res) => {
  try {
    const updateddata = await LandingPage.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateddata);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteData = async (req, res) => {
  try {
    const deleteddata = await LandingPage.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteddata);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addTesti = async (req, res) => {
  try {
    const landingpage = await LandingPage.findOne({ _id: req.params.id });
    landingpage.testimonial.push(req.body);
    landingpage.save();
    res.status(200).json(landingpage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addSkills = async (req, res) => {
  try {
    const landingpage = await LandingPage.findOne({ _id: req.params.id });
    landingpage.skills.push(req.body);
    landingpage.save();
    res.status(200).json(landingpage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addQual = async (req, res) => {
  try {
    const landingpage = await LandingPage.findOne({ _id: req.params.id });
    landingpage.qualification.push(req.body);
    landingpage.save();
    res.status(200).json(landingpage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addSevices = async (req, res) => {
  try {
    const landingpage = await LandingPage.findOne({ _id: req.params.id });
    landingpage.services.push(req.body);
    landingpage.save();
    res.status(200).json(landingpage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addContact = async (req, res) => {
  try {
    const landingpage = await LandingPage.findOne({ _id: req.params.id });
    landingpage.contact.push(req.body);
    landingpage.save();
    res.status(200).json(landingpage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// export const getHero = async (req, res) => {
//   try {
//     const hero = await Hero.find();
//     res.json(hero);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const getAbout = async (req, res) => {
//   try {
//     const about = await About.find();
//     res.json(about);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const saveAbout = async (req, res) => {
//   const about = new About(req.body);
//   try {
//     const insertedabout = await about.save();
//     res.status(201).json(insertedabout);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
