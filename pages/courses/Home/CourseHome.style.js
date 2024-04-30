import styled from 'styled-components';
const CourseHomeWrapper = styled.div`
  .course-home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    margin-top: 80px;
    // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .course-home-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
    margin-top: 20px;
  }

  .course-home-text {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #666;
    margin-top: 20px;
  }

  .semester-selector {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .semester-label {
    font-size: 1.2rem;
    margin-right: 1rem;
    color: #333;
  }

  .semester-select {
    border: 1px solid #cbd5e0;
    border-radius: 0.5rem;
    padding: 0.7rem 1rem;
    background-color: #fff;
    color: #333;
    font-size: 1rem;
  }

  .semester-select option {
    font-size: 1rem;
  }

  .semester-subjects-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #333;
  }
`;
export default CourseHomeWrapper;
