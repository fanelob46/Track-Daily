export const adminAccess = (req, res, next) => {
  if (!res.user.isAdmin) {
    return res.status(403).json({ success: false, message: "Access denied" });
  }
  next();
};
