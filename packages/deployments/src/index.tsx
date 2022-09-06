// @ts-nocheck

import PoolyChibiMainnet from '@turbo-lab/core-sol/deployments/localhost/PoolyChibi.json';
import PoolyChibiTestnet from '@turbo-lab/core-sol/deployments/localhost/PoolyChibi.json';
import PoolyChibiLocalhost from '@turbo-lab/core-sol/deployments/localhost/PoolyChibi.json';


function useNetworkContract(network: string, contract: string) {

    switch (network) {
        case 'mainnet':
            switch (contract) {
                case 'PoolyChibi':
                    return PoolyChibiMainnet
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 'testnet':
            switch (contract) {
                case 'PoolyChibi':
                    return PoolyChibiTestnet
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 'localhost':
            switch (contract) {
                case 'PoolyChibi':
                    return PoolyChibiLocalhost
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        default:
            break;
    }

}

export { useNetworkContract }