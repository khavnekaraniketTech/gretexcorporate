import React from 'react'

const SocialProof = () => {
    // Reusable star component to keep code clean
    const Star = () => (
        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
    )

    return (
        <div className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif text-gray-900 dark:text-white mb-4">Loved by our customers</h2>
                <p className="text-gray-500 dark:text-gray-400">Join over 10,000+ happy shoppers worldwide.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
                
                {/* Review 1 */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-sm shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex gap-1 mb-4"><Star/><Star/><Star/><Star/><Star/></div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"The quality of these cotton tees is unmatched. They fit perfectly and have held up brilliantly wash after wash. Highly recommend!"</p>
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Sarah Jenkins</p>
                        <p className="text-xs text-gray-400">Verified Buyer</p>
                    </div>
                </div>

                {/* Review 2 */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-sm shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex gap-1 mb-4"><Star/><Star/><Star/><Star/><Star/></div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"I was skeptical about the fits online, but the sizing guide was perfect. The fabric feels incredibly premium for the price."</p>
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Michael Chen</p>
                        <p className="text-xs text-gray-400">Verified Buyer</p>
                    </div>
                </div>

                {/* Review 3 */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-sm shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex gap-1 mb-4"><Star/><Star/><Star/><Star/><Star/></div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"Customer service was fantastic when I needed to exchange a size. Fast shipping and truly beautiful, minimalist designs."</p>
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Emma Thompson</p>
                        <p className="text-xs text-gray-400">Verified Buyer</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SocialProof