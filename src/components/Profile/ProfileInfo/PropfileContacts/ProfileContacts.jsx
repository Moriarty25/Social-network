import PropTypes from "prop-types";
import { ProfileContact } from "./ProfileContact";

export const ProfileContacts = ({contacts}) => {
  return( Object.entries(contacts).map(([property, value]) => (
    <ProfileContact key={property} property={property} value={value} />
  )));
};

ProfileContacts.propTypes = {
    contacts: PropTypes.shape({
    github: PropTypes.string,
    vk: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
    website: PropTypes.string,
    youtube: PropTypes.string,
    mainLink: PropTypes.string,
  }),
};
