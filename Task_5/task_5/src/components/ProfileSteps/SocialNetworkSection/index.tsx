import './SocialNetworkSection.scss'

interface SocialNetwork {
  id: string;
  network: string;
  profile: string;
}

interface SocialNetworkSectionProps {
  socialNetworks: SocialNetwork[];
  setSocialNetworks: (networks: SocialNetwork[]) => void;
}

const SocialNetworkSection: React.FC<SocialNetworkSectionProps> = ({
  socialNetworks,
  setSocialNetworks,
}) => {
  const handleAddSocialNetwork = () => {
    const newSocialNetworks = [
      ...socialNetworks,
      { id: Date.now().toString(), network: '', profile: '' },
    ];
    setSocialNetworks(newSocialNetworks);
  };

  const handleSocialNetworkChange = (id: string, field: string, value: string) => {
    const updatedNetworks = socialNetworks.map((network) =>
      network.id === id ? { ...network, [field]: value } : network,
    );
    setSocialNetworks(updatedNetworks);
  };

  return (
    <div className="social-network-section">
      <h3 className='heading-common'>Social network</h3>
      <p className='text-common'>Indicate the desired communication method</p>

      {socialNetworks.map((network) => (
        <div key={network.id} className="social-network-input">
          <select
            value={network.network}
            onChange={(e) => handleSocialNetworkChange(network.id, 'network', e.target.value)}
            className="input-field">
            <option value="">Select a network</option>
            <option value="Skype">Skype</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="LinkedIn">LinkedIn</option>
          </select>
          <input
            type="text"
            placeholder="@profile"
            value={network.profile}
            onChange={(e) => handleSocialNetworkChange(network.id, 'profile', e.target.value)}
            className="input-field"
          />
        </div>
      ))}

      <button type="button" className="add-more-button" onClick={handleAddSocialNetwork}>
        + Add More
      </button>
    </div>
  );
};

export default SocialNetworkSection;
