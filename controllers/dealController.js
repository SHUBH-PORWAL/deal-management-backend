const Deal = require('../models/Deal');

exports.getDeals = async (req, res) => {
  try {
    const { status, search, assignee } = req.query;

    let filter = {};

    if (status && status !== 'all') {
      filter.status = status;
    }

    if (assignee && assignee !== 'all') {
      filter.assignee = new RegExp(assignee, 'i');
    }

    if (search) {
      filter.$or = [
        { clientName: new RegExp(search, 'i') },
        { dealName: new RegExp(search, 'i') },
        { assignee: new RegExp(search, 'i') }
      ];
    }

    const deals = await Deal.find(filter);

    const totalDeals = deals.length;
    const totalRevenue = deals.reduce((sum, d) => sum + d.budget, 0);
    const activeDeals = deals.filter(d => ['Negotiating', 'Active'].includes(d.status)).length;

    res.json({ deals, statistics: { totalDeals, totalRevenue, activeDeals } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDealById = async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id);
    if (!deal) return res.status(404).json({ error: "Deal not found" });
    res.json(deal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
