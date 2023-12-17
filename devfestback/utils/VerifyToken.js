import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: " You're not authorize" });
  }

  // if token is exist then verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.log(token);
      console.log(process.env.JWT_SECRET_KEY);
      return res
        .status(401)
        .json({ success: false, message: " token is invalid" });
    }

    req.user = user;
    next(); // don't forget to call next
  });
};

export const verifyPerson = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.type === 'person') {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: " You're not authenticated" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.type === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: " You're not authorize" });
    }
  });
};

export const verifySos = (req, res, next) => {
    verifyToken(req, res, next, () => {
      if (req.user.type === "sos") {
        next();
      } else {
        return res
          .status(401)
          .json({ success: false, message: " You're not authorize" });
      }
    });
  };


  export const verifyAssociation = (req, res, next) => {
    verifyToken(req, res, next, () => {
      if (req.user.type === "association") {
        next();
      } else {
        return res
          .status(401)
          .json({ success: false, message: " You're not authorize" });
      }
    });
  };  