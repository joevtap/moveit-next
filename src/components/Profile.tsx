import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/joevtap.png" alt="profile" />
            <div>
                <strong>Joel Vítor Torres</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 1</p>
            </div>
        </div>
    );
}