import './CheckboxAgreement.scss'

interface CheckboxAgreementProps {
  agreed: boolean;
  setAgreed: (agreed: boolean) => void;
}

const CheckboxAgreement: React.FC<CheckboxAgreementProps> = ({ agreed, setAgreed }) => {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        checked={agreed}
        onChange={() => setAgreed(!agreed)}
        className="checkbox"
      />
      <span>
        I agree with <a href="#">Terms of use</a>
      </span>
    </div>
  );
};

export default CheckboxAgreement;
