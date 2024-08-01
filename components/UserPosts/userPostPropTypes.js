import PropTypes from 'prop-types';

export const UserPostPropTypes={
    id: PropTypes.number.isRequired,
    date: PropTypes.any.isRequired,
    lastUpload: PropTypes.any,
    name: PropTypes.string.isRequired,
    alohas: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    screenTime: PropTypes.number.isRequired,
    tydeNumber: PropTypes.number.isRequired,
    tydeTime: PropTypes.number.isRequired,
    image: PropTypes.any,
    title: PropTypes.string,
    avatar: PropTypes.any,
};