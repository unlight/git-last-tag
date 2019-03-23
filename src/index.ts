import { execSync } from 'child_process';

export const SEMANTIC_VERSION = 'v[0-9]*\\.[0-9]*\\.[0-9]*';

export function getLastTagSync(match?: string) {
    let tagsOption = '--tags';
    if (match) {
        tagsOption = `--tags="${match}"`;
    }
    const ref = execSync(`git rev-list --max-count=1 ${tagsOption}`, { encoding: 'utf8' });
    return execSync(`git describe --tags ${ref}`, { encoding: 'utf8' });
}

/**
 * todo: make it real async
 */
export async function getLastTag() {
    const result = getLastTagSync();
    return result;
}
