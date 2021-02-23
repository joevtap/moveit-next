import { useState } from 'react';
import styles from '../styles/components/ExperienceBar.module.scss'

export function ExperienceBar() {

    const [value, setValue] = useState(50)

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${value}%` }} />
                <span className={styles.currentExperience} style={{ left: `${value}%` }}>{Number(value) * 6}xp</span>
            </div>
            <span>600 xp</span>
        </header>
    );
}