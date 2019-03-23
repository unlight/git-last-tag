import { execSync } from 'child_process';

export const SEMANTIC_VERSION = 'v[0-9]*\\.[0-9]*\\.[0-9]*';

// todo: git describe --tags `git rev-list --tags="v[0-9]*\.[0-9]*\.[0-9]*" --max-count=1`
export function getLastTagSync(match?: string) {
    let tagsOption = '--tags';
    if (match) {
        tagsOption = `--tags="${match}"`;
    }
    const ref = execSync(`git rev-list --max-count=1 ${tagsOption}`, { encoding: 'utf8' });
    const tag = execSync(`git describe --tags ${ref}`, { encoding: 'utf8' });
    return tag;
}

/**
 * todo: make it real async
 */
export async function getLastTag() {
    const result = getLastTagSync();
    return result;
}
