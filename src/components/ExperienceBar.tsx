import { useContext, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.scss";

export function ExperienceBar() {
    const [value, setValue] = useState(50);

    const { currentXp, xpToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentXp * 100) / xpToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span
                    className={styles.currentExperience}
                    style={{ left: `${percentToNextLevel}%` }}
                >
                    {currentXp}xp
                </span>
            </div>
            <span>{xpToNextLevel}xp</span>
        </header>
    );
}
