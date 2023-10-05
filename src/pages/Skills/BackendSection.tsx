import { data } from "./data/BackendData";
import { Item } from "./Item";
import "./Section.scss";

export const BackendSection = () => {
    return (
        <div className="skills__section">
            <h2 className="skills__section-title">
                Backend
            </h2>

            <div className="skills__section-content">
                {data.map((section, index) => (
                    <div
                        className="skills__section-box"
                        key={index}>
                        <h3 className="skills__section-box-title">
                            {section.sectionTitle}
                        </h3>

                        {section.items.map((item, idx) => (
                            <Item
                                key={idx}
                                title={item.title}
                                icon={item.icon}
                                description={item.description}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
